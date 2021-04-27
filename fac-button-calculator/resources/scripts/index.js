//PART ONE

//Get all numbers from the doc and add elements, handle values later. Try to make an array. 
console.log(document.getElementsByClassName("number"));

const numbers = document.getElementsByClassName("number");
//const numArr = array.from(numbers); Wrong because syntax, like floor
const numArr = Array.from(numbers);

console.log(numArr);
//Add event listener to every element. e is an object here, check Browser console

function addActiveClass(element) {
  console.log(element.target);
  element.classList.toggle("active");
}

//Now, if we click on any box, the console shows working. Why does this work for all?
/*for (let i = 0; i < numArr.length; i++) {
  numArr[i].addEventListener("click", e => {
    addActiveClass(e);
  });
}*/

const newNum = numArr.map(function (number) {
  number.addEventListener("click", event => {
    addActiveClass(event.target)
  });
});
console.log(numArr);


//When a number is clicked, give it the CSS-class .active, And remove the class if the element has the class already --> see inside addActiveClass function-declaration

//When a number is clicked, add the element to an array

//Only add the number if there are less than 5 numbers ...

//Check whether the array already contains the element

//If it does, don't add it

//If a 6th element is clicked, remove the first element

//Add the 6th element
