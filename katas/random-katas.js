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


//6 Diamond
function diamond(n) {
  if (n < 1 || n % 2 === 0) {
    return null;
  } else {
    let diam = [];
    for (let i = 0; i < (n + 1) / 2; i++) {
      let stars = "*".repeat(n - 2 * i);
      let blanks = " ".repeat(i);
      let insert = blanks + stars + "\n";
      if (i === 0) {
        diam.push(insert);
      } else {
        diam.unshift(insert);
        diam.push(insert);
      }
    }
    return diam.join("");
  }
}

//Other Solutions:
function diamond1(n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2)
    str += ' '.repeat(len)
    str += '*'.repeat(n - 2 * len)
    str += '\n'
  }
  return str
}

function diamond2(n) {
  if (n % 2 == 0 || n < 1) return null
  var x = 0, add, diam = line(x, n);
  while ((x += 2) < n) {
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
}//z.

function repeat(str, x) { return Array(x + 1).join(str); }
function line(spaces, stars) { return repeat(" ", spaces) + repeat("*", stars) + "\n"; }

function diamond3(n) {
  if (n < 0 || !(n % 2)) return null;
  const middleIndex = Math.floor(n / 2);

  return Array.apply(null, { length: n })
    .map((el, index) => {
      const indentation = Math.abs(index - middleIndex);
      const numberOfAsterisks = n - indentation * 2;
      return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
    })
    .join('\n') + '\n';
}


//5 IQ test: find position of non-fitting item regarding evenness
function iqTest(numbers) {
  let arr = numbers.split(" ");
  let evens = arr.filter(x => x % 2 === 0).length;
  if (evens === 1) {
    return arr.findIndex(x => x % 2 === 0) + 1;
  }
  return arr.findIndex(x => x % 2 !== 0) + 1;
}

function iqTest1(numbers) {
  numbers = numbers.split(" ").map(function (el) { return parseInt(el) });

  var odd = numbers.filter(function (el) { return el % 2 === 1 });
  var even = numbers.filter(function (el) { return el % 2 === 0 });

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

const iqTest4 = test => {
  const numbers = test.split(" ");
  const evens = numbers.filter(el => el % 2);
  const odds = numbers.filter(el => !(el % 2));
  const differ = evens.length == 1 ? evens[0] : odds[0]

  return numbers.indexOf(differ) + 1
}

function iqTest2(numbers) {
  numbers = numbers.split(' ')

  var evens = []
  var odds = []

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }

  return evens.length === 1 ? evens[0] : odds[0]
}

function iqTest3(numbers) {
  var nums = numbers.split(" ").map(x => x % 2);
  var sum = nums.reduce((a, b) => a + b);
  var target = sum > 1 ? 0 : 1;

  return nums.indexOf(target) + 1;
}

//Find Sum Squares Integers
/* 5 Integer-square
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".
 */


function findDivs(a) {
  let divs = [];
  for (let j = 1; j <= a; j++) {
    if (a % j === 0) {
      divs.push(j);
    }
  }
  return divs;
}

function isSumSq(b) {
  /*
  let divs = findDivs(b);
  console.log(divs);
  let divSq = divs.map(x => Math.sqrt(x));
  console.log(divSq);
  console.log(sumSq);
  let sumSqRt = Math.sqrt(sumSq);
  console.log(sumSqRt);
  */
  let sumSq = findDivs(b).reduce((total, x) => total + x ** 2);
  return Number.isInteger(Math.sqrt(sumSq));
}

function listSquared(m, n) {
  console.log(m, n);
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (isSumSq(i)) {
      let sumSq = findDivs(i).reduce((total, x) => total + x ** 2);
      let insert = [i, sumSq];
      arr.push(insert);
      /*
       if (Number.isInteger(Math.sqrt()))
      */
    }
  }
  return arr;
}



console.log(listSquared(1, 25)); //[[1, 1], [42, 2500], [246, 84100]]
console.log(listSquared(1, 250)); //[[1, 1], [42, 2500], [246, 84100]]
console.log(listSquared(42, 250)); //[[42, 2500], [246, 84100]]
console.log(listSquared(250, 500)); //[[287, 84100]]
/*
console.log(isSumSq(246)); //[[1, 1], [42, 2500], [246, 84100]]
console.log(5/2);
console.log(4%2);
console.log(5%2);
*/


function findDivs(a) {
  let divs = [];
  for (let j = 1; j <= a; j++) {
    if (a % j === 0) {
      divs.push(j);
    }
  }
  return divs;
}

function findSumSq(b) {
  return findDivs(b).reduce((total, x) => total + x ** 2);
}

function isSumSqRt(c) {
  return Number.isInteger(Math.sqrt(findSumSq(c)));
}

function listSquared(m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (isSumSqRt(i)) {
      let sumSq = findSumSq(i);
      let insert = [i, sumSq];
      arr.push(insert);
    }
  }
  return arr;
}



//Simplified
function findDivs(a) {
  let divs = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      divs.push(i);
    }
  }
  return divs;
}

const findSumSq = a => findDivs(a).reduce((total, x) => total + x ** 2);
const isSumSqRt = a => Number.isInteger(Math.sqrt(findSumSq(a)));

function listSquared(m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (isSumSqRt(i)) {
      let sumSq = findSumSq(i);
      let insert = [i, sumSq];
      arr.push(insert);
    }
  }
  return arr;
}