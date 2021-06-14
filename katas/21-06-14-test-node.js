console.log("Hello");

function findDivs(a) {
  let divs = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      divs.push(i);
    }
  }
  // console.log(divs);
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

console.log(findDivs(100));
console.log(listSquared(1, 100));

