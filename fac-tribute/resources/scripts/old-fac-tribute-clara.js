const subHead = document.getElementById("sub-head");
const oldImg = document.getElementById("img-dm");

const inputField = document.getElementById("input-brahms");
const quizSection = document.getElementById("quiz");
const quizReply = document.getElementById("quiz-reply");

const pMore = document.getElementById("p-read-on");
const hiddenSection = document.getElementById("hidden");

//Functions
const newSubHead = () => {
  subHead.innerHTML = "19th-centry Piano Powerhouse";
}

const newImg = () => {
  oldImg.src = "https://upload.wikimedia.org/wikipedia/commons/c/cb/100_DM_Serie4_Rueckseite.jpg";
}

const quizThanks = () => {
  quizSection.style.backgroundColor = "green";
  quizReply.innerHTML = "Thanks, it was Johannes Brahms!";
}

const quizCorrect = () => {
  if (correct) {
    quizSection.style.backgroundColor = "green";
    quizReply.innerHTML = "Correct!";
  } else {
    quizSection.style.backgroundColor = "red";
    quizReply.innerHTML = "Almost!";
  }
}

const readOn = () => {
  pMore.innerHTML = "Here is their story...";
  hiddenSection.style.display = "block";
}

//Event-Listeners
subHead.addEventListener("click", newSubHead);