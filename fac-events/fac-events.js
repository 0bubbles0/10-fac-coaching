const sidebar = document.getElementById("sidebar");
const contentSection = document.getElementById("content");

/*button var*/
const redButton = document.getElementsByClassName("button")[0];
const greenButton = document.getElementsByClassName("green")[0];
const blueButton = document.getElementsByClassName("blue")[0];
/*button functions*/
const makeRedCanvas = () => {
  contentSection.style.background = "red";
}
const makeGreenCanvas = () => {
  contentSection.style.background = "green";
}
const makeBlueCanvas = () => {
  contentSection.style.background = "blue";
}
/*merge*/
const changeBackgroundColor = (color) => {
  contentSection.classList.add = color + "-background";
}
/*call functions*/
redButton.addEventListener("click", () => { changeBackgroundColor("red") });
greenButton.addEventListener("click", () => { changeBackgroundColor("green") });
blueButton.addEventListener("click", makeBlueCanvas);