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
const isSumSqrt = a => Number.isInteger(Math.sqrt(findSumSq(a)));

function listSquared(m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (isSumSqrt(i)) {
      let sumSq = findSumSq(i);
      let insert = [i, sumSq];
      arr.push(insert);
    }
  }
  return arr;
}

console.log(findDivs(250));
console.log(listSquared(1, 250));

//Fisher Yates Method
for (let i = arr.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * i);
  k = arr[i];
  arr[i] = arr[j];
  arr[j] = k;
}

Math.max.apply(null, arr);
Math.min.apply(null, arr);