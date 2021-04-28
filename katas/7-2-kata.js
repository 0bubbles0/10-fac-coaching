/*Shortest Word
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

//Kata 7.2 Length of Shortest Word
const test = "Hi there";
const test2 = "Winterwunderland oder doch nicht";
const test3 = "a e i ou";

function findShortestWord2(str) {
  let words = str.split(" ");
  let count = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < count) {
      count = words[i].length;
    }
  }
  return count;
}

function findShortestWord3(str) {
  let words = str.split(" ");
  let count = words[0].length;
  for (let x of words) {
    if (x.length < count) {
      count = x.length;
    }
  }
  return count;
}

function findShortestWord(str) {
  let words = str.split(" ");
  let count = words[0].length;
  words.map(i => {
    if (i.length < count) {
      count = i.length;
    }
  });
  return count;
}

console.log(findShortestWord(test));
console.log(findShortestWord(test2));
console.log(findShortestWord(test3));

//Solutions
function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}
function findShort(s) {
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}