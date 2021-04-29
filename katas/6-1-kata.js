//6.1 Sum of (Multiples of 3 or 5)
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
*/
const test611 = 10; //23
const test612 = 17; //60

function sumOMul(n) {
  const multiples = [0];
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((sum, x) => sum + x);
}

console.log(sumOMul(test611));
console.log(sumOMul(test612));

//Other Solutions
function solution(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}

function solution(number) {
  var n3 = Math.floor(--number / 3), n5 = Math.floor(number / 5), n15 = Math.floor(number / 15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}