/*
Vowel Count
Return the number (count) of vowels in the given string. 
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

const k71TestStr = "abc"; //1
const k71TestStr1 = "bacde"; //2
const k71TestStr2 = "aeiou"; //5
const k71TestStr3 = "bcdbcd"; //0

const oldVowelCount = (str) => {
  let count = 0;
  const word = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
};

const vowelCount1 = (str) => {
  let count = 0;
  const word = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    const vowelTest = (value) => {
      if (str[i] === value) {
        count += 1;
      }
    }
    var anyMatch = vowels.some(vowelTest);
  }
  return count;
}

const vowelCount2 = (str) => {
  let count = 0;
  const word = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.some((y) => str[i] === y)) {
      count += 1;
    }
  }
  return count;
}

const vowelCount = (str) => {
  let count = 0;
  const word = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelTest = (x) => {
    if (vowels.some((y) => x === y)) {
      count += 1;
    }
  }
  const loop = word.map(vowelTest);
  return count;
}


console.log(vowelCount(k71TestStr));
console.log(vowelCount(k71TestStr1));
console.log(vowelCount(k71TestStr2));
console.log(vowelCount(k71TestStr3));

/*
  return resArr.push(arr2.slice(0, n));
console.log();
console.log();
console.log();
console.log();
*/


//Solutions
function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}