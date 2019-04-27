const index = require("../index");
var assert = require("assert");

describe("B001", function() {
  const expected = [
    {
      input: 13,
      output: 2
    },
    {
      input: 5,
      output: 1
    },
    {
      input: 6,
      output: 2
    },
    {
      input: 439,
      output: 3
    },
    {
      input: 951,
      output: 3
    },
    {
      input: 1911,
      output: 3
    },
    {
      input: 65535,
      output: 16
    },
    {
      input: 262141,
      output: 16
    },
    {
      input: 524283,
      output: 16
    },
    {
      input: 524275,
      output: 15
    }
  ];

  it("should return expected response ", function() {
    for (let i = 0; i < expected.length; i++) {
      assert.equal(index.Main(expected[i].input), expected[i].output);
    }
  });
});
