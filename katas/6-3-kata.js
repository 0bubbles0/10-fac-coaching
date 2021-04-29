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
    if (arr2.indexOf(arr1[i])) {
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

//Other Solutions
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function (x) { return b.indexOf(x) == -1; });
}


/*
console.log();
console.log();
*/



//Michael
/*kyu 7 – Coding Meetup #5 Higher -
Take array of objects  return an object which includes the cound of each coding language represeented at the meetup
*/

function countLanguages(list) {
  var output = [];
  var C = list.filter(x => x.language === "C").length;
  if (C > 0) {
    output["C"] = C;
  } else if (JS > 0) {
    output["JavaScript"] = JS;
  }
  console.log(output;)
}

Danilo
Challenge: four: (Thursday, 29 April):

Write a function lookThroughObject;
lookThroughObject accepts two arguments: an object("a"), and a function ("b");
lookThroughObject must return an object that contains only those key - value pairs in "a" whose value causes "b" to return true

Examples:
lookThroughObjet({ name: 'Kim', age: 43, member: true }, (v) => typeof v === 'number')
// Expected: { age: 43 }

lookThroughObject({ firstName: 'Kim', lastName: 'Berly', address: '123 fake street' }, (v) => v.length > 3)
// Expected: { lastName: 'Berly', address: '123 fake street' }

lookThroughObject({ a: [], b: -1, c: [1, 2] }, (v) => Array.isArray(v) && v.length > 0)
// Expected: { c: [1, 2] }

This one is slightly more challenging, but do give it a shot!
Here's a hint to help you get started, should you need it: Find out how to loop over objects in JavaScript
Also, we'd much prefer if you ask for help when you get stuck instead of struggling alone, that's what #help - and - hints is for!

