const index = require("../index");
var assert = require("assert");

describe("B002", function() {
  const expected = [
    {
      input: [3, 2, -1, 1, -2, 5, 0],
      output: 4
    },
    {
      input: [1],
      output: 2
    },
    {
      input: [2, 3, 4],
      output: 1
    },
    {
      input: [-1, -2, -3],
      output: 1
    },
    {
      input: [0, 1, 1],
      output: 2
    },
    {
      input: [3, 4, -1, 1],
      output: 2
    }
  ];

  it("should return expected response", function() {
    for (let i = 0; i < expected.length; i++) {
      assert.equal(index.Main(expected[i].input), expected[i].output);
    }
  });
});
