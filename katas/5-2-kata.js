/* 5.2 kata: Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let nonZeros = arr.filter(x => x !== 0);
  let theZeros = arr.filter(y => y === 0);
  return [...nonZeros, ...theZeros];
}

// Wrong Attempts (0 come out nested):
function moveZeros1(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let insert = arr.splice(i, 1);
      arr.push(insert);
    }
  }
  return arr;
}

function moveZeros2(arr) {
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let insert = arr.splice(i, 1);
      newArr.push(insert);
    }
  }
  let unNestedArr = newArr.join("");
  console.log(unNestedArr);
  arr = [...arr, ...unNestedArr];
  return arr;
}

//Other Solutions:
var moveZeros = function (arr) {
  return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) { return num !== 0; });
  var zeroList = arr.filter(function (num) { return num === 0; });
  return filtedList.concat(zeroList);
}

var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}

var moveZeros = function (arr) {
  let result = arr.filter(c => c !== 0)
  let count = arr.length - result.length

  return result.concat(Array(count).fill(0))
}