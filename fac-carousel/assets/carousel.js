//Make array from all images from html
const carouselImages = Array.from(document.getElementsByClassName("carousel-image"));

const startButton = document.querySelector("#controls-start");
const stopButton = document.querySelector("#controls-pause");

let currentImageIndex = 0;

function updateImageIndex() {
  let upperLimit = carouselImages.length - 1;

  if (currentImageIndex === upperLimit) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
};

function updateVisibilities() {
  updateImageIndex();
  carouselImages.forEach((element, index) => {
    if (index === currentImageIndex) {
      element.classList.remove("img-hidden");
      element.classList.add("img-visible");
    } else {
      element.classList.remove("img-visible");
      element.classList.add("img-hidden");
    }
  })
}


let carouselInterval;

const startRunning = () => {
  carouselInterval = setInterval(updateVisibilities, 2500);
}

const stopRunning = () => {
  clearInterval(carouselInterval);
}

startButton.addEventListener("click", startRunning);

stopButton.addEventListener("click", stopRunning);