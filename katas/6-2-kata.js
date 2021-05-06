/*6.2 kata: Reverse every other word in the string 
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

const test621 = "Hello this is the great test";
const test622 = "Hello,  this is? the  great test. ";

function reverse(str) {
  let cleanArr = str.split(" ").filter(val => val.valueOf() != 0);
  for (let i = 1; i < cleanArr.length; i += 2) {
    let insert = cleanArr[i].split("").reverse().join("");
    cleanArr.splice(i, 1, insert);
  }
  return cleanArr.join(" ");
}

console.log("Hello");
console.log(revStr(test621));
console.log(revStr(test622));

//Other Solutions
function reverse(str) {
  let arr = str.split(" ");
  for (var i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split('').reverse().join("");
  }
  return arr.join(" ").trim();
}

function reverse(string) {
  return string
    .split` `
    .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
    .join` `
    .trim();
}

function reverse(str) {
  return str.split(` `).map((it, index) => {
    return index % 2 !== 0 ? it.split(``).reverse().join(``) : it
  }).join(` `).trim();
}

const reverse = str => str.trim().split(' ').map((e, i) => i % 2 == 0 ? e : e.split('').reverse().join('')).join(' ');

const reverse = str =>
  str.trim().split(` `).map((val, idx) => idx % 2 ? [...val].reverse().join(``) : val).join(` `);

let reverse = str =>
  str.trim().split(` `).map((x, i) => (i % 2 !== 0)
    ? x.split(``).reverse().join(``) : x).join(' ');

function reverse(string) {
  if (string.trim().length === 0) {
    return ""
  } else {
    let array = string.split(' ');
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 !== 0) {
        let splitString = array[i].split("");
        let reverseString = splitString.reverse();
        let joinString = reverseString.join('')
        newArray.push(joinString);
      } else {
        newArray.push(array[i])
      }
    }
    return newArray.join(" ")
  }
}

reverse = a => a.trim().split` `.map((e, i) => i % 2 ? e.split``.reverse().join`` : e).join` `;

function reverse(str) {

  let arr = str.split(" ");
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");

  }
  if (arr.join(" ") === "   ") {
    return "";
  }
  return arr.join(" ");
}


