// 7 kata: Over the Road
/*
Task
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
Street

1|   |6
3|   |4
5|   |2

Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
Example

Given your house number address and length of street n, give the house number on the opposite side of the street.

overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8

Note about errors

If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)
*/

function overTheRoad(address, n) {
  return 2 * n + 1 - address;
}
console.log(overTheRoad(23633656673, 310027696726)) //596421736780


/*
Hello Everyone.
  Today, I learned how to create an array of numbers(1...n) without using for loop.

A kata I tried this morning didn't allow me to use for loop as it creates massive arrays for tests and time runs out!

When I usually create arrays of numbers I would go like:
let array = []
for (let i = 0; i < n; i++) {
  array.push(i);
}
return array

  in a function.

But today I found that if I use from() and keys() I can easily create an array of numbers, it's only one line! :star_struck:

Array.from(Array(10).keys()) // It will return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

oli — Today at 10: 00
Wow cool, I've never used .keys() before. If you need more control over the array you can pass a second argument to Array.from. It's a map function to calculate each item:

Array.from({ length: 5 }, (x, i) => i * 2); // [0, 2, 4, 6, 8]

/ Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
*/

console.log("Hello");

function makeEvensArr(n) {
  let evensOrig = Array.from({ length: n }, (x, i) => 2 + i * 2);
  return evensOrig.reverse();
}

function makeUnevensArr(n) {
  return Array.from({ length: n }, (x, i) => 1 + i * 2);
}
function makeUnevensArr1(n) {
  let try1 = Array.from({ length: n }, (x, i) => 1 + i * 2);
  // let try3 = (1, n, 2) => Array.from({ length: (n - 1) /});
  let try2 = Array.from(Array(10).keys());
  console.log(try1);
  console.log(try2);
  return try1;
}
function makeUnevensArr2(address) {
  let try1 = Array.from(Array(address + 1).keys());
  console.log(try1);
  return try1;
}
//makeUnevensArr2(1);

function generateSequence(start, stop, step) {
  let try1 = Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
  console.log(try1);
  return try1;
}
//generateSequence(1, 5, 2);

function overTheRoad1(address, n) {
  let unevensArr = makeUnevensArr(n);
  let evensArr = makeEvensArr(n);
  console.log(evensArr);
  console.log(unevensArr);
  //console.log(address % 2);
  if (address % 2) {
    console.log("orig uneven");
    let addressIndex = unevensArr.indexOf(address);
    console.log(evensArr[addressIndex]);
    return evensArr[addressIndex];
  }
  console.log("orig even");
  let addressIndex = evensArr.indexOf(address);
  console.log(unevensArr[evensArr.indexOf(address)]);
  return unevensArr[evensArr.indexOf(address)];
}



