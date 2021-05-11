/*5.1 Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  let words = str.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    if (/[a-zA-Z]/.test(words[i])) {
      let letters = words[i].split("");
      let insert = letters.splice(0, 1);
      letters.push(insert, "ay");
      words[i] = letters.join("");
    }
  }
  return words.join(" ");
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));


//Other Solutions
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function (word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}