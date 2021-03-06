// 7.4 kata: List filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const test741 = [1, 2, 'a', 'b']; // [1,2]
const test742 = [1, 'a', 'b', 0, 15]; // [1,0,15]
const test743 = [1, 2, 'aasf', '1', '123', 123]; // [1,2,123]

const test = (arr) => {
  return newArr = arr.filter(x => typeof x === "number");
}

function filter_list(l) {
  return l.filter(function (v) { return typeof v == 'number' })
}

console.log(test(test741));
console.log(test(test742));
console.log(test(test743));

//7.5 kata: Anagram finder

var isAnagram = function (test, original) {
  const try1 = test.toLowerCase().split("").sort().join("");
  const try2 = original.toLowerCase().split("").sort().join("");
  return try1 == try2;
};

// write the function isAnagram
var isAnagram = function (test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t == o) ? true : false;
};

String.prototype.sortLetters = function () {
  return this.toLowerCase().split('').sort().join('');
}
var isAnagram = function (test, original) {
  return test.sortLetters() == original.sortLetters();
};