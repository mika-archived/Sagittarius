/// <reference path="../src/typings/tsd.d.ts" />
import "should";

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
    const obj1: any = {
      name: "Octo",
      number: 1
    };
    let obj2: any = {
      name: "Octo",
      number: 1
    };
    equalsTo(obj1, obj2).should.equal(true);
    obj2.number = 2;
    equalsTo(obj1, obj2).should.equal(false);
  });

  it("equalsTo - case 3 (array in object)", () => {
    const obj1: any = {
      items: [ {name: "A"}, {name: "B"}],
      number: 1
    };
    let obj2: any = {
      items: [ {name: "A"}, {name: "B"}],
      number: 1
    };
    equalsTo(obj1, obj2).should.equal(true);
    obj2.items[0].name = "C";
    equalsTo(obj1, obj2).should.equal(false);
  });

  it("equalsTo - case 4 (object in object)", () => {
    const obj1: any = {
      item: {name: "Coin", value: 100},
      number: 1
    };
    let obj2: any = {
      item: {name: "Coin", value: 100},
      number: 1
    };
    equalsTo(obj1, obj2).should.equal(true);
    obj2.item.value = 101;
    equalsTo(obj1, obj2).should.equal(false);
  });

  // ==================================
  it("equalsToArray - case 1 (primitive)", () => {
    const array1: any = [10, 11, 12];
    let array2: any = [10, 11, 12];
    equalsToArray(array1, array2).should.equal(true);
    array2[2] = 13;
    equalsToArray(array1, array2).should.equal(false);
    const array3: any = [10, 11, 12, 13];
    equalsToArray(array1, array3).should.equal(false);
    let array4: any = [10, 11];
    equalsToArray(array1, array4).should.equal(false);
  });

  it("equalsToArray - case 2 (object)", () => {
    const array1: any = [
      {age: 16, name: "Tom"},
      {age: 21, name: "John"},
      {age: 19, name: "Emi"}
    ];
    let array2: any = [
      {age: 16, name: "Tom"},
      {age: 21, name: "John"},
      {age: 19, name: "Emi"}
    ];
    equalsToArray(array1, array2).should.equal(true);
    array2[2].age = 13;
    equalsToArray(array1, array2).should.equal(false);
  });

  it("equalsToArray - case 3 (array in object)", () => {
    const array1: any = [
      {age: 16, name: "Tom", subjects: ["Math", "Japanese", "Sicense"]},
      {age: 21, name: "John", subjects: ["Math"]},
      {age: 19, name: "Emi", subjects: ["Japanese", "English", "Computer"]}
    ];
    let array2: any = [
      {age: 16, name: "Tom", subjects: ["Math", "Japanese", "Sicense"]},
      {age: 21, name: "John", subjects: ["Math"]},
      {age: 19, name: "Emi", subjects: ["Japanese", "English", "Computer"]}
    ];
    equalsToArray(array1, array2).should.equal(true);
    array2[2].subjects[2] = "Spanish";
    equalsToArray(array1, array2).should.equal(false);
  });

  it("equalsToArray - case 4 (object in object)", () => {
    const array1: any = [
      {address: {country: "USA", pref: "New York"}, age: 16, name: "Tom"},
      {address: {country: "Canada", pref: "Ottawa"}, age: 21, name: "John"},
      {address: {country: "Japan", pref: "Tokyo"}, age: 19, name: "Emi"}
    ];
    let array2: any = [
      {address: {country: "USA", pref: "New York"}, age: 16, name: "Tom"},
      {address: {country: "Canada", pref: "Ottawa"}, age: 21, name: "John"},
      {address: {country: "Japan", pref: "Tokyo"}, age: 19, name: "Emi"}
    ];
    equalsToArray(array1, array2).should.equal(true);
    array2[2].address.pref = "Kyoto";
    equalsToArray(array1, array2).should.equal(false);
  });

});
