import {Action} from '../models/actions/Action';
import {AsyncAction} from '../models/actions/AsyncAction';
import {MeAction} from '../models/actions/MeAction';
import {Me} from '../models/Me';
import {ActionTypes} from './ActionTypes';

var request = require('request');
var querystring = require('querystring');

function requestMe(): MeAction {
  return {
    type: ActionTypes.RequestMe,
    isFetching: true,
    me: null
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

function get(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.get({
      url: 'https://api.chatwork.com/v1/' + endPoint + (params != null ? '?' + querystring.stringify(params) : ''),
      headers: {
        'X-ChatWorkToken': localStorage.getItem('chatwork-token')
      },
      json: true
    }, (error, response, body) => {
      if(!error && response.statusCode == 200) {
        console.log('%c HTTP 200 OK', 'color: #00cc99; font-weight: bold', body);
        resolve(body);
      } else {
        console.log('%c HTTP ERROR', 'color: #cc0066; font-weight: bold', body);
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
      if(!error && response.statusCode == 200) {
        console.log('%c HTTP 200 OK', 'color: #00cc99; font-weight: bold', body);
        resolve(body);
      } else {
        console.log('%c HTTP ERROR', 'color: #cc0066; font-weight: bold', body);
        reject();
      }
    });
  });
}