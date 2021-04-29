//6.3 Array.diff  
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
const test621 = [1, 2];
const test622 = [1, 2, 2, 2, 3];

function arrayDiff1(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i] == -1)) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

function arrayDiff(arr1, arr2) {
  return arr1.filter(i => arr2.indexOf(i) == -1);
}

console.log("[1,2], [1] -> [2]");
console.log(arrayDiff1([1, 2], [1]));
console.log("[1,2,2,2,3], [2] -> [1, 3]");
console.log(arrayDiff1([1, 2, 2, 2, 3], [2]));

/*
console.log();
console.log();
*/