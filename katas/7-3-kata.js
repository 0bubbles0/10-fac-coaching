// 7.3 kata: Pin
const pin = "1234"; //true
const pin2 = "12345"; //false
const pin3 = "12e3"; //false

//WORKS
function validatePIN(pin) {
  if ((pin.length !== 4) && (pin.length !== 6)) {
    return false;
  }
  if (pin.split("").every(x => /[0-9]/.test(x))) {
    return true;
  }
  return false;
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN(pin) {
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }
  return false;
}

function validatePIN(pin) {
  if ((pin.length !== 4) && (pin.length !== 6)) {
    return false;
  }
  const testDigits = (x) => {
    if (/[0-9]/.test(x)) {
      return true;
    };
  }
  if (pin.split("").every(testDigits)) {
    return true;
  }
  return false;
}

//WRONG
function valPin2(str) {
  if (str.length !== (4 || 6)) {
    return false;
  }
  for (let i = 0; i < positions.length; i++) {
    if (typeof str.charAt(i) == "number") {
      return true;
    }
  }
  return false;
}

function valPin3(str) {
  if (str.length !== (4 || 6)) {
    return false;
  }
  if (parseInt(str)) {
    return true;
  }
  return false;
}

function valPin4(str) {
  if (str.length !== (4 || 6)) {
    return false;
  }
  const positions = str.split("");
  if (positions.every(x => parseInt(x))) {
    return true;
  }
  return false;
}

function valPin(str) {
  if (str.length !== (4 || 6)) {
    return false;
  }
  if (str.split("").every(x => parseInt(x))) {
    return true;
  }
  return false;
}

console.log(typeof 2);
console.log(parseInt("e"));

console.log(valPin(pin));
console.log(valPin(pin2));
console.log(valPin(pin3));