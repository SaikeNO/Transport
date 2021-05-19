// HEADER SLIDER
const slider = () => {
  const slider = document.getElementById("header-slider");
  const leftArrow = document.getElementById("header-arrow-left");
  const rightArrow = document.getElementById("header-arrow-right");
  const slices = [...document.querySelectorAll(".slice")];
  const sliceWidth = slices[0].clientWidth;
  let translate = 0;
  const time = 4000;

  const slideRight = () => {
    if (translate === -sliceWidth * (slices.length - 1)) {
      translate = sliceWidth;
    }
    slider.style.transform = `translate(${translate - sliceWidth}px)`;
    translate -= sliceWidth;
  };
  const slideLeft = () => {
    if (translate === 0) {
      translate = -sliceWidth * slices.length;
    }
    slider.style.transform = `translate(${translate + sliceWidth}px)`;
    translate += sliceWidth;
  };

  let indexInterval = setInterval(() => {
    slideRight();
  }, time);

  rightArrow.addEventListener("click", () => {
    clearInterval(indexInterval);
    slideRight();
    indexInterval = setInterval(() => {
      slideRight();
    }, time);
  });

  leftArrow.addEventListener("click", () => {
    clearInterval(indexInterval);
    slideLeft();
    indexInterval = setInterval(() => {
      slideRight();
    }, time);
  });
};

const counter = () => {
  const clientNumberElem = document.getElementById("client-number");
  const ratePercentElem = document.getElementById("rate-percent");
  const ratingNumberElem = document.getElementById("rating-number");

  const distanceFromTop = clientNumberElem.offsetTop;
  const windowHeight = window.innerHeight;

  let clientNumber = 0;
  let ratePercent = 0;
  let ratingNumber = 0;
  let flaga = true;

  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    if (distanceFromTop < scrollValue + windowHeight && flaga) {
      flaga = false;
      const indexInterval = setInterval(() => {
        if (clientNumber < 42) {
          clientNumber++;
        }
        if (ratePercent < 73) {
          ratePercent++;
        }
        if (ratingNumber < 4.9) {
          ratingNumber += 0.1;
        }
        clientNumberElem.textContent = `${clientNumber}+`;
        ratePercentElem.textContent = `${ratePercent}%`;
        ratingNumberElem.textContent = `${ratingNumber.toFixed(2)}`;
        if (clientNumber === 42 && ratePercent === 73 && ratingNumber === 5.0)
          clearInterval(indexInterval);
      }, 40);
    }
  });
};

slider();
counter();
