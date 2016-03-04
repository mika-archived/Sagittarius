import {Action} from '../models/Action';
import {ActionTypes} from './ActionTypes';

var request = require('request');
var querystring = require('querystring');

function get(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    // TODO
  });
}

function post(endPoint: string, params: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    // TODO
  });
}