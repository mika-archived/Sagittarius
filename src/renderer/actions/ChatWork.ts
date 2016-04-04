import {Action} from '../models/actions/Action';
import {AsyncAction} from '../models/actions/AsyncAction';
import {MeAction} from '../models/actions/MeAction';
import {MembersAction} from '../models/actions/MembersAction';
import {MessagesAction} from '../models/actions/MessagesAction';
import {RoomsAction} from '../models/actions/RoomsAction';
import {Contact} from '../models/Contact';
import {DummyMe} from '../models/DummyMe';
import {Me} from '../models/Me';
import {Message} from '../models/Message';
import {Room} from '../models/Room';
import {ActionTypes} from './ActionTypes';
import {RequestTypes} from './RequestTypes';

var request = require('request');
var querystring = require('querystring');

// ~/me
function requestMe(): MeAction {
  return {
    type: ActionTypes.RequestMe,
    isFetching: true,
    me: new DummyMe()
  } as MeAction;
}

function responseMe(json: any): MeAction {
  return {
    type: ActionTypes.ResponseMe,
    isFetching: false,
    me: new Me(json)
  } as MeAction;
}

export function fetchMe(): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestMe());
    return get('me')
      .then(json => dispatch(responseMe(json)));
  };
}

// ~/my/status
// ~/my/tasks
// ~/contacts
// ~/rooms
function requestRooms(): RoomsAction {
  return {
    type: ActionTypes.RequestRooms,
    isFetching: true,
    rooms: []
  } as RoomsAction;
}

function responseRooms(json: any): RoomsAction {
  return {
    type: ActionTypes.ResponseRooms,
    isFetching: false,
    rooms: json.map(element => new Room(element))
  }
}

// TODO: 作成後に、再度 GET したほうがいいかも
export function fetchRooms(requestType: RequestTypes = RequestTypes.Get, params: any = null): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestRooms());
    if(requestType == RequestTypes.Get) {
      return get('rooms')
        .then(json => dispatch(responseRooms(json)));
    } else if (requestType == RequestTypes.Post) {
      return post('rooms', params)
        .then(json => dispatch(responseRooms(json)));
    } else {
      throw "TypeErrpr";
    }
  };
}

// ~/rooms (POST)
// ~/rooms/:id
// ~/rooms/:id (PUT)
// ~/rooms/:id (DELETE)
// ~/rooms/:id/members
function requestRoomMembers(): MembersAction {
  return {
    type: ActionTypes.RequestRoomMembers,
    isFetching: true,
    roomId: -1,
    members: []
  } as MembersAction;
}

function responseRoomMembers(id: number, json: any): MembersAction {
  return {
    type: ActionTypes.ResponseRoomMembers,
    isFetching: false,
    roomId: id,
    members: json.map(w => new Contact(w))
  } as MembersAction;
}

export function fetchMembers(id: number): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestRoomMembers());
    return get('rooms/' + id + '/members')
      .then(json => dispatch(responseRoomMembers(id, json)));
  };
} 

// ~/rooms/:id/messages
function requestRoomMessages(): MessagesAction {
  return {
    type: ActionTypes.RequestRoomMessages,
    isFetching: true,
    roomId: -1,
    messages: []
  } as MessagesAction;
}

function responseRoomMessages(id: number, json: any): MessagesAction {
  return {
    type: ActionTypes.ResponseRoomMessages,
    isFetching: false,
    roomId: id,
    messages: json.map(w => new Message(w))
  } as MessagesAction;
}

export function fetchMessages(id: number, isForce: boolean = false): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestRoomMessages());
    return get('rooms/' + id + '/messages', {force: isForce ? 1 : 0})
      .then(json => dispatch(responseRoomMessages(id, json)));
  };
}

// ~/rooms/:id/messages/:message_id
// ~/rooms/:id/tasks
// ~/rooms/:id/tasks/:task_id
// ~/rooms/:id/files
// ~/rooms/:id/files/:file_id


function get(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.get({
      url: 'https://api.chatwork.com/v1/' + endPoint + (params != null ? '?' + querystring.stringify(params) : ''),
      headers: {
        'X-ChatWorkToken': localStorage.getItem('chatwork-token')
      },
      json: true
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if(!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject();
      }
    });
  });
}

function post(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.post({
      url: 'https://api.chatwork.com/v1/' + endPoint,
      headers: {
        'X-ChatWorkToken': localStorage.getItem('chatwork-token')
      },
      json: true,
      form: params != null ? querystring.stringify(params) : ''
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if(!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject();
      }
    });
  });
}

function _delete(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.delete({
      url: 'https://api.chatwork.com/v1/' + endPoint + (params != null ? '?' + querystring.stringify(params) : ''),
      headers: {
        'X-ChatWorkToken': localStorage.getItem('chatwork-token')
      },
      json: true
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if(!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject();
      }
    });
  });
}

function put(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.put({
      url: 'https://api.chatwork.com/v1/' + endPoint,
      headers: {
        'X-ChatWorkToken': localStorage.getItem('chatwork-token')
      },
      json: true,
      form: params != null ? querystring.stringify(params) : ''
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if(!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject();
      }
    });
  });
}

function printHTTPResult(error: any, response: any, body: any) {
  console.group('HTTP Response');
  if(!error && response.statusCode == 200) {
    console.log('%c HTTP 200 OK', 'color: #00cc99; font-weight: bold', body);
  } else {
    console.log('%c HTTP ERROR', 'color: #cc0066; font-weight: bold', body);
  }
  var rate = response.headers['x-ratelimit-remaining'];
  if(rate <= 0) {
    console.log('%c RateLimit-Remaining', 'color: #ff9966; font-weight: bold', rate);
  } else {
    console.log('%c RateLimit-Remaining', 'color: #660099; font-weight: bold', rate);
  }
  console.log('%c ReteLimit-Reset', 'color: #660099; font-weight: bold',  new Date(+response.headers['x-ratelimit-reset'] * 1000).toLocaleString());
  
  console.groupEnd();
}