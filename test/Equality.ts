/// <reference path="../src/typings/tsd.d.ts" />

var should = require('should');

import {equalsTo, equalsToArray} from '../src/renderer/models/Equality';

describe('Equality', () => {
  it('equalsTo - case 1 (primitive)', () => {
    equalsTo(10, 10).should.equal(true);
    equalsTo(10, 11).should.equal(false);
    equalsTo(10.0, 10.0).should.equal(true);
    equalsTo(10.0, 10.1).should.equal(false);
    equalsTo("a", "a").should.equal(true);
    equalsTo("a", "b").should.equal(false);
    equalsTo(1, "1").should.equal(false);
  });
  
  it('equalsTo - case 2 (object)', () => {
    var obj1 = {
      name: "Octo",
      number: 1
    };
    var obj2 = {
      name: "Octo",
      number: 1
    };
    equalsTo(obj1, obj2).should.equal(true);
    obj2.number = 2;
    equalsTo(obj1, obj2).should.equal(false);
  });
});