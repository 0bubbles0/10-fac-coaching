//Reverse a Number
function reverseNumber(n) {
  if (n < 0) {
    let nRevStr = (n * (-1)).toString().split("").reverse().join("");
    return parseInt(nRevStr) * (-1);
  } else {
    let nRevStr = n.toString().split("").reverse().join("");
    return parseInt(nRevStr);
  }
}

reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')
