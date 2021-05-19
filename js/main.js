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

slider();
