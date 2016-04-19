/// <reference path="../../typings/tsd.d.ts" />

import {ErrorAction} from "../models/actions/ErrorAction";
import {MeAction} from "../models/actions/MeAction";
import {MembersAction} from "../models/actions/MembersAction";
import {MessagesAction} from "../models/actions/MessagesAction";
import {RoomsAction} from "../models/actions/RoomsAction";
import {Contact} from "../models/Contact";
import {DummyMe} from "../models/DummyMe";
import {Me} from "../models/Me";
import {Message} from "../models/Message";
import {Room} from "../models/Room";
import {ActionTypes} from "./ActionTypes";
import {RequestTypes} from "./RequestTypes";
import * as request from "request";
import * as querystring from "querystring";


// Throw error
function responseError(json: any): ErrorAction {
  return {
    isFetching: false,
    message: json.errors[0],
    type: ActionTypes.ResponseError
  } as ErrorAction;
}

// ~/me
function requestMe(): MeAction {
  return {
    isFetching: true,
    me: new DummyMe(),
    type: ActionTypes.RequestMe
  } as MeAction;
}

function responseMe(json: any): MeAction {
  return {
    isFetching: false,
    me: new Me(json),
    type: ActionTypes.ResponseMe
  } as MeAction;
}

export function fetchMe(): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestMe());
    return get("me")
      .then(json => dispatch(responseMe(json)))
      .catch(json => dispatch(responseError(json)));
  };
}

// ~/my/status
// ~/my/tasks
// ~/contacts
// ~/rooms
function requestRooms(): RoomsAction {
  return {
    isFetching: true,
    rooms: [],
    type: ActionTypes.RequestRooms
  } as RoomsAction;
}

function responseRooms(json: any): RoomsAction {
  return {
    isFetching: false,
    rooms: json.map(element => new Room(element)),
    type: ActionTypes.ResponseRooms
  } as RoomsAction;
}

// TODO: 作成後に、再度 GET したほうがいいかも
export function fetchRooms(requestType: RequestTypes = RequestTypes.Get, params: any = null): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestRooms());
    if (requestType === RequestTypes.Get) {
      return get("rooms")
        .then(json => dispatch(responseRooms(json)))
        .catch(json => dispatch(responseError(json)));
    } else if (requestType === RequestTypes.Post) {
      return post("rooms", params)
        .then(json => dispatch(responseRooms(json)))
        .catch(json => dispatch(responseError(json)));
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
    isFetching: true,
    members: [],
    roomId: -1,
    type: ActionTypes.RequestRoomMembers
  } as MembersAction;
}

function responseRoomMembers(id: number, json: any): MembersAction {
  return {
    isFetching: false,
    members: json.map(w => new Contact(w)),
    roomId: id,
    type: ActionTypes.ResponseRoomMembers
  } as MembersAction;
}

export function fetchMembers(id: number): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestRoomMembers());
    return get("rooms/" + id + "/members")
      .then(json => dispatch(responseRoomMembers(id, json)))
      .catch(json => dispatch(responseError(json)));
  };
}

// ~/rooms/:id/messages
function requestRoomMessages(): MessagesAction {
  return {
    isFetching: true,
    messages: [],
    roomId: -1,
    type: ActionTypes.RequestRoomMessages
  } as MessagesAction;
}

function responseRoomMessages(id: number, json: any): MessagesAction {
  return {
    isFetching: false,
    messages: json.map(w => new Message(w)),
    roomId: id,
    type: ActionTypes.ResponseRoomMessages
  } as MessagesAction;
}

export function fetchMessages(id: number, isForce: boolean = false): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestRoomMessages());
    return get("rooms/" + id + "/messages", {force: isForce ? 1 : 0})
      .then(json => dispatch(responseRoomMessages(id, json)))
      .catch(json => dispatch(responseError(json)));
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
      headers: {
        "X-ChatWorkToken": localStorage.getItem("chatwork-token")
      },
      json: true,
      url: "https://api.chatwork.com/v1/" + endPoint + (params != null ? "?" + querystring.stringify(params) : "")
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
}

function post(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.post({
      form: params != null ? querystring.stringify(params) : "",
      headers: {
        "X-ChatWorkToken": localStorage.getItem("chatwork-token")
      },
      json: true,
      url: "https://api.chatwork.com/v1/" + endPoint
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
}

function del(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.del({
      headers: {
        "X-ChatWorkToken": localStorage.getItem("chatwork-token")
      },
      json: true,
      url: "https://api.chatwork.com/v1/" + endPoint + (params != null ? "?" + querystring.stringify(params) : "")
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
}

function put(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.put({
      form: params != null ? querystring.stringify(params) : "",
      headers: {
        "X-ChatWorkToken": localStorage.getItem("chatwork-token")
      },
      json: true,
      url: "https://api.chatwork.com/v1/" + endPoint
    }, (error, response, body) => {
      printHTTPResult(error, response, body);
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
}

function printHTTPResult(error: any, response: any, body: any): void {
  console.group("HTTP Response");
  if (!error && response.statusCode === 200) {
    console.log("%c HTTP 200 OK", "color: #00cc99; font-weight: bold", body);
  } else {
    console.log("%c HTTP ERROR", "color: #cc0066; font-weight: bold", body);
  }
  const rate: number = response.headers["x-ratelimit-remaining"];
  if (rate <= 0) {
    console.log("%c RateLimit-Remaining", "color: #ff9966; font-weight: bold", rate);
  } else {
    console.log("%c RateLimit-Remaining", "color: #660099; font-weight: bold", rate);
  }
  console.log("%c ReteLimit-Reset", "color: #660099; font-weight: bold",  new Date(+response.headers["x-ratelimit-reset"] * 1000).toLocaleString());

  console.groupEnd();
}
