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


//Appl fcc-carousel works
//FCC Carousel
//variables
const fccImages = Array.from(document.getElementsByClassName("fcc-tile"));
const fccBack = document.querySelector("#button-back-fcc");
const fccNext = document.querySelector("#button-next-fcc");

let fccVisibleIndex = 0;

//Functions
//new index
function backFccInd() {
  if (fccVisibleIndex === 0) {
    fccVisibleIndex = fccImages.length - 1
  } else {
    fccVisibleIndex--;
  }
}

function nextFccInd() {
  if (fccVisibleIndex === fccImages.length - 1) {
    fccVisibleIndex = 0;
  } else {
    fccVisibleIndex++;
  }
}


//new visibility
function backFccImgVisible() {
  backFccInd();
  fccImages.forEach((element, index) => {
    if (index === fccVisibleIndex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}

function nextFccImgVisible() {
  nextFccInd();
  fccImages.forEach((element, index) => {
    if (index === fccVisibleIndex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}


fccBack.addEventListener("click", backFccImgVisible);
fccNext.addEventListener("click", nextFccImgVisible);


//Appl fcc-carousel BETTER works
//FCC Carousel
//variables
const fccImages = Array.from(document.getElementsByClassName("fcc-tile"));
const fccBackButton = document.querySelector("#button-back-fcc");
const fccNextButton = document.querySelector("#button-next-fcc");

let fccVisibleIndex = 0;

//Functions
//new visibility
function fccNewVisibility() {
  fccImages.forEach((element, index) => {
    if (index === fccVisibleIndex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}

//each direction
function backFccFn() {
  if (fccVisibleIndex === 0) {
    fccVisibleIndex = fccImages.length - 1
  } else {
    fccVisibleIndex--;
  }
  fccNewVisibility();
}

function nextFccFn() {
  if (fccVisibleIndex === fccImages.length - 1) {
    fccVisibleIndex = 0;
  } else {
    fccVisibleIndex++;
  }
  fccNewVisibility();
}

//Event Listeners

fccBackButton.addEventListener("click", backFccFn);
fccNextButton.addEventListener("click", nextFccFn);