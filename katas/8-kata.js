//1.	Convert a String to a Number!
var stringToNumber = function (str) {
  return parseInt(str, 10);
}

const stringToNumber = str => Number(str);
var stringToNumber = function (str) {
  return +str;
}
var stringToNumber = Number;
stringToNumber = s => +s

//2.	Remove First and Last Character
function removeChar(str) {
  str = str.substring(1, str.length - 1);
  return str;
};

function removeChar(str) {
  return str.slice(1, -1);
}
const removeChar = str => str.slice(1, -1)
function removeChar(str) {
  return str.substring(1, str.length - 1);
};

//3. Sum of positive
function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { sum += arr[i]; }
  }
  return sum;
}

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
function positiveSum(arr) {
  return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);


//4.	String repeat
function repeatStr(n, s) {
  let newStr = '';
  for (i = 1; i < n + 1; i++) {
    newStr += s;
  }
  return newStr;
}

function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++)
    str += s;
  return str;
}
function repeatStr(n, s) {
  return s.repeat(n);
}
repeatStr = (n, s) => s.repeat(n)

//5.	Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) { return 'Draw!' }
  else if ((p1 === 'scissors' && p2 === 'paper')
    || (p1 === 'paper' && p2 === 'rock')
    || (p1 === 'rock' && p2 === 'scissors')) { return 'Player 1 won!' }
  else { return 'Player 2 won!' }
};

const winner1 = ["scissorspaper", "paperrock", "rockscissors"];
const rps = (p1, p2) => {
  return p1 === p2 ? `Draw!` : `Player ${winner1.indexOf(p1 + p2) !== -1 ? 1 : 2} won!`;
};

const win1 = {
  "rock": "scissors",
  "scissors": "paper",
  "paper": "rock",
}
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else return `Player ${win1[p1] == p2 ? 1 : 2} won!`;
};

const rps = (p1, p2) => {
  return p1 === p2 ? `Draw!` : `Player ${win1[p1] === p2 ? 1 : 2} won!`;
}

//Other solutions
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
}

const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };

  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};

function rps(p1, p2) {
  var choices = ['rock', 'paper', 'scissors'];
  var x = choices.indexOf(p1);
  var y = choices.indexOf(p2);

  if (x === y) return 'Draw!';
  if (x === 0 && y === 2) return 'Player 1 won!';
  if (x === 2 && y === 0) return 'Player 2 won!';
  if (x > y) return 'Player 1 won!'
  else return 'Player 2 won!';
}

const winsOver = {
  "rock": "scissors",
  "scissors": "paper",
  "paper": "rock"
};
const rps = (p1, p2) => {
  if (p1 === p2)
    return "Draw!";
  else if (winsOver[p1] === p2)
    return "Player 1 won!";
  else
    return "Player 2 won!";
};
