/// <reference path="../src/typings/tsd.d.ts" />

import "../src/renderer/extensions/StringExt";

describe("StringExt", () => {
  it("string.Format - case 1", () => {
    "Hello, world".format("Hello").should.equal("Hello, world");
  });

  it("string.Format - case 2", () => {
    "Hello, {0}".format("world").should.equal("Hello, world");
  });

  it("string.Format - case 3", () => {
    "{0}, {1}".format("Hello", "world").should.equal("Hello, world");
  });

  it("string.Format - case 4", () => {
    "{0}, {1}{2}".format("Hello", "world").should.equal("Hello, world{2}");
  });
});
