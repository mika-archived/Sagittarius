import {Action} from '../models/Action';
import {AsyncAction} from '../models/AsyncAction';
import {ActionTypes} from './ActionTypes';

var request = require('request');
var querystring = require('querystring');

function requestMe(): AsyncAction {
  return {
    type: ActionTypes.RequestMe,
    isFetching: true
  } as AsyncAction;
}

function responseMe(json: any) {
  return {
    type: ActionTypes.ResponseMe,
    isFetching: false,
    me: json
  }
}

export function fetchMe(): (dispatch) => Promise<any> {
  return (dispatch) => {
    dispatch(requestMe());
    return get('me', '')
      .then(response => response.json())
      .then(json => dispatch(responseMe(json)));
  };
}

function get(endPoint: string, token: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.get({
      url: 'https://api.chatwork.com/v1/' + endPoint + (params != null ? '?' + querystring.stringify(params) : ''),
      headers: {
        'X-ChatWorkToken': token
      },
      json: true,
    }, (error, response, body) => {
      if(!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
}

function post(endPoint: string, token: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    request.post({
      url: 'https://api.chatwork.com/v1/' + endPoint,
      headers: {
        'X-ChatWorkToken': token
      },
      json: true,
      form: params != null ? querystring.stringify(params) : ''
    }, (error, response, body) => {
      if(!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
}