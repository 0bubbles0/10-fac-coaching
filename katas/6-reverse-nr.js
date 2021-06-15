/*
6 Find the nth Reverse Number
Reverse Number is a number which is the same when reversed.

For Example;
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101 => First 20 Reverse Numbers

TASK:
    You need to return the nth reverse number. (Assume that reverse numbers start from 0 as shown in the example.)

NOTES:
    0 < n <= 1000000
    If this is too easy, you can try https://www.codewars.com/kata/600c18ec9f033b0008d55eec*
function findReverseNumber(n) {
      // your code
    }
    until 1.000.000
    test 1.000.000
    */
var reverseArr = [];
function makeRevArr() {
  for (let i = 0; reverseArr.length < 100; i++) {
    let revStr = i.toString().split("").reverse().join("");
    if (i === Number(revStr)) {
      reverseArr.push(i);
    }
  }
  console.log(reverseArr);
  return reverseArr;
}
makeRevArr();
function findReverseNumber(n) {
  return reverseArr[n - 1];
}

console.log(findReverseNumber(100));
console.log(findReverseNumber(64));
console.log(findReverseNumber(50));
console.log(findReverseNumber(40));
console.log(findReverseNumber(12));
console.log(findReverseNumber(45));


/*TESTS
    describe("FindReverseNumberTests", function() {
  const chai = require("chai");
  const assert = chai.assert;

  it("test1", function() {
    assert.equal(findReverseNumber(1), 0);
  });

  it("test2", function() {
    assert.equal(findReverseNumber(2), 1);
  });

  it("test3", function() {
    assert.equal(findReverseNumber(10), 9);
  });

  it("test4", function() {
    assert.equal(findReverseNumber(100), 909);
  });

  it("test5", function() {
    assert.equal(findReverseNumber(1000000), 90000000009);
  });

});

*/







/*Attempt
var reverseArr = [];
function makeRevArr() {
  for (let i = 0; i < 10000000; i++) {
    let revStr = i.toString().split("").reverse().join("");
    if (i === Number(revStr)) {
      reverseArr.push(i);
    }
  }
  return reverseArr;
}
makeRevArr();
function findReverseNumber(n) {
  return reverseArr[n-1];
}

OR
function makeRevArr() {
  var reverseArr = [];
  for (let i = 0; reverseArr.length < 1000000; i++) {
    let revStr = i.toString().split("").reverse().join("");
    if (i === Number(revStr)) {
      reverseArr.push(i);
    }
  }
  return reverseArr;
}
makeRevArr();
function findReverseNumber(n) {
  return reverseArr[n - 1];
}
*/