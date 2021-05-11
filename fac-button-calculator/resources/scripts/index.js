//PART ONE
//Get all numbers from the doc and add elements, handle values later. Try to make an array. 
//console.log(document.getElementsByClassName("number"));
const numbers = document.getElementsByClassName("number");
//const numArr = array.from(numbers); Wrong because syntax, like floor
const numArr = Array.from(numbers);
const clickArr = [];
const button = document.getElementById("go-button");
//console.log(numArr);
//Add event listener to every element. e is an object here, check Browser console
function addActiveClass(element) {
  console.log(element.target);
  element.classList.toggle("active");
  if (element.classList.contains("active")) {
    clickArr.push(element);
  } else {
    clickArr.splice(clickArr.indexOf(element), 1);
  }
  if (clickArr.length > 5) {
    clickArr[0].classList.toggle("active");
    clickArr.shift();
  }
  console.log(clickArr);
}
//Now, if we click on any box, the console shows working. Why does this work for all?
/*for (let i = 0; i < numArr.length; i++) {
  numArr[i].addEventListener("click", e => {
    addActiveClass(e);
  });
}*/
function doubleAll(arr) {
  console.log("Double");
  return arr.map(value => value * 2);
}

function show3Divs(arr) {
  console.log("3Divs");
  return arr.map(
    function test3(x) {
      if (x % 3 === 0) {
        return x;
      }
    }
  )
}

function showResult(x) {

}

const newNum = numArr.map(function (number) {
  number.addEventListener("click", event => {
    addActiveClass(event.target);
  });
});

const newResult = 

)

/*My attempt

const newNum = numArr.map(function (number) {
  number.addEventListener("click", event => {
    if (newNum.length < 5 && newNum.indexOf(event.target) === -1) {
      addActiveClass(event.target);
    }
    else {
      newNum.shift();
      addActiveClass(event.target);
    }
    return newNum;
  })
});
* /

console.log(numArr);
//When a number is clicked, give it the CSS-class .active, And remove the class if the element has the class already --> see inside addActiveClass function-declaration

//When a number is clicked, add the element to an array
//Only add the number if there are less than 5 numbers ...
//Check whether the array already contains the element
//If it does, don't add it
//If a 6th element is clicked, remove the first element
//Add the 6th element
*/
