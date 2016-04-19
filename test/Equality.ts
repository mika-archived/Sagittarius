/// <reference path="../src/typings/tsd.d.ts" />

var should = require("should");

import {equalsTo, equalsToArray} from "../src/renderer/models/Equality";

describe("Equality", () => {
  it("equalsTo - case 1 (primitive)", () => {
    equalsTo(10, 10).should.equal(true);
    equalsTo(10, 11).should.equal(false);
    equalsTo(10.0, 10.0).should.equal(true);
    equalsTo(10.0, 10.1).should.equal(false);
    equalsTo("a", "a").should.equal(true);
    equalsTo("a", "b").should.equal(false);
    equalsTo(1, "1").should.equal(false);
  });
  
  it("equalsTo - case 2 (object)", () => {
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
  
  it("equalsTo - case 3 (array in object)", () => {
    var obj1 = {
      items: [ {name: "A"}, {name: "B"}],
      number: 1
    };
    var obj2 = {
      items: [ {name: "A"}, {name: "B"}],
      number: 1
    };
    equalsTo(obj1, obj2).should.equal(true);
    obj2.items[0].name = "C";
    equalsTo(obj1, obj2).should.equal(false);
  });
  
  it("equalsTo - case 4 (object in object)", () => {
    var obj1 = {
      item: {name: "Coin", value: 100},
      number: 1
    };
    var obj2 = {
      item: {name: "Coin", value: 100},
      number: 1
    };
    equalsTo(obj1, obj2).should.equal(true);
    obj2.item.value = 101;
    equalsTo(obj1, obj2).should.equal(false);
  });
  
  // ==================================
  it("equalsToArray - case 1 (primitive)", () => {
    var array1 = [10, 11, 12];
    var array2 = [10, 11, 12];
    equalsToArray(array1, array2).should.equal(true);
    array2[2] = 13;
    equalsToArray(array1, array2).should.equal(false);
    var array3 = [10, 11, 12, 13];
    equalsToArray(array1, array3).should.equal(false);
    var array4 = [10, 11];
    equalsToArray(array1, array4).should.equal(false);
  });

  it("equalsToArray - case 2 (object)", () => {
    var array1 = [
      {name: "Tom", age: 16},
      {name: "John", age: 21},
      {name: "Emi", age: 19}
    ];
    var array2 = [
      {name: "Tom", age: 16},
      {name: "John", age: 21},
      {name: "Emi", age: 19}
    ];
    equalsToArray(array1, array2).should.equal(true);
    array2[2].age = 13;
    equalsToArray(array1, array2).should.equal(false);
  });

  it("equalsToArray - case 3 (array in object)", () => {
    var array1 = [
      {name: "Tom", age: 16, subjects: ["Math", "Japanese", "Sicense"]},
      {name: "John", age: 21, subjects: ["Math"]},
      {name: "Emi", age: 19, subjects: ["Japanese", "English", "Computer"]}
    ];
    var array2 = [
      {name: "Tom", age: 16, subjects: ["Math", "Japanese", "Sicense"]},
      {name: "John", age: 21, subjects: ["Math"]},
      {name: "Emi", age: 19, subjects: ["Japanese", "English", "Computer"]}
    ];
    equalsToArray(array1, array2).should.equal(true);
    array2[2].subjects[2] = "Spanish";
    equalsToArray(array1, array2).should.equal(false);
  });

  it("equalsToArray - case 4 (object in object)", () => {
    var array1 = [
      {name: "Tom", age: 16, address: {country: "USA", pref: "New York"}},
      {name: "John", age: 21, address: {country: "Canada", pref: "Ottawa"}},
      {name: "Emi", age: 19, address: {country: "Japan", pref: "Tokyo"}}
    ];
    var array2 = [
      {name: "Tom", age: 16, address: {country: "USA", pref: "New York"}},
      {name: "John", age: 21, address: {country: "Canada", pref: "Ottawa"}},
      {name: "Emi", age: 19, address: {country: "Japan", pref: "Tokyo"}}
    ];
    equalsToArray(array1, array2).should.equal(true);
    array2[2].address.pref = "Kyoto";
    equalsToArray(array1, array2).should.equal(false);
  });

});