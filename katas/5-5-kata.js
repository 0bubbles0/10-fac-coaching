/* k.5.5: Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

 */
function rot13(message) {
  let letterArr = message.split("");
  let newArr = []
  for (let i = 0; i < letterArr.length; i++) {
    let c = letterArr[i].charCodeAt(0);
    if ((64 < c && c < 78) || (96 < c && c < 110)) {
      let cN = String.fromCharCode(c += 13);
      newArr.push(cN);
    }
    else if ((77 < c && c < 91) || (109 < c && c < 123)) {
      let cN = String.fromCharCode(c -= 13);
      newArr.push(cN);
    } else {
      newArr.push(letterArr[i]);
    }
  }
  return newArr.join("");
}


const test551 = "nb";
const test552 = "abAB";
//const test552 = "";
//const test553 = "";

console.log(rot13(test551));

//console.log();


//Other Solutions
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));

var codeA = 'A'.charCodeAt(0),
  codeZ = 'Z'.charCodeAt(0),
  codea = 'a'.charCodeAt(0),
  codez = 'z'.charCodeAt(0);
function rot13(message) {
  return message.split('').map(function (char) {
    var code = char.charCodeAt(0);
    if (codeA <= code && code <= codeZ) {
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if (codea <= code && code <= codez) {
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}

