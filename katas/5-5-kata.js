/* k.5.5: Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

 */
function rot13(str) {
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    console.log(c);
    if ((64 < c && c < 78) || (96 < c && c < 110)) {
      let cN = String.fromCharCode(c += 13);
      console.log(cN);
      str = str.replace(str.charAt(i), cN);
    } else if ((77 < c && c < 91) || (109 < c && c < 123)) {
      let cN = String.fromCharCode(c -= 13);
      console.log(cN);
      str = str.replace(str.charAt(i), cN);
    }
  }
  return str;
}


const test551 = "nb";
const test552 = "abAB";
//const test552 = "";
//const test553 = "";

console.log(rot13(test551));
//console.log();