// HEADER SLIDER
const slider = (slider, leftArrow, rightArrow, slices, elementsInView) => {
  const sliceWidth = slices[0].clientWidth;
  let translate = 0;
  const time = 4000;

  const slideRight = () => {
    if (translate === -sliceWidth * (slices.length - elementsInView)) {
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

  let indexInterval = setInterval(slideRight, time);

  rightArrow.addEventListener("click", () => {
    clearInterval(indexInterval);
    slideRight();
    indexInterval = setInterval(slideRight, time);
  });

  leftArrow.addEventListener("click", () => {
    clearInterval(indexInterval);
    slideLeft();
    indexInterval = setInterval(slideRight, time);
  });
};

const teamSlider = (slider, leftArrow, rightArrow, slices, img) => {
  const sliceWidth = slices[0].clientWidth;
  let translate = 0;
  let imgIndex = 0;
  const time = 4000;
  const imgPaths = [
    "assets/images/kierowca.png",
    "assets/images/kierowca2.png",
    "assets/images/kierownik.png",
  ];
  img.src = imgPaths[0];

  const slideRight = () => {
    if (translate === -sliceWidth * (slices.length - 1)) {
      translate = sliceWidth;
    }
    imgIndex++;
    if (imgIndex === imgPaths.length) {
      imgIndex = 0;
    }
    img.src = imgPaths[imgIndex];
    slider.style.transform = `translate(${translate - sliceWidth}px)`;
    translate -= sliceWidth;
  };

  const slideLeft = () => {
    if (translate === 0) {
      translate = -sliceWidth * slices.length;
    }
    if (imgIndex === 0) {
      imgIndex = imgPaths.length;
    }
    imgIndex--;
    img.src = imgPaths[imgIndex];
    slider.style.transform = `translate(${translate + sliceWidth}px)`;
    translate += sliceWidth;
  };

  let indexInterval = setInterval(slideRight, time);

  rightArrow.addEventListener("click", () => {
    clearInterval(indexInterval);
    slideRight();
    indexInterval = setInterval(slideRight, time);
  });

  leftArrow.addEventListener("click", () => {
    clearInterval(indexInterval);
    slideLeft();
    indexInterval = setInterval(slideRight, time);
  });
};

// COUNTER
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

// FAQ
const handleFAQ = () => {
  const questions = [...document.querySelectorAll(".faq__question")];
  const paragraphElement = document.createElement("p");

  const questionContent = `The four means of transportation are airways, roadways, railways,
  and waterways. The means of transport is a term used to describe the
  different types of transportation systems used to take goods or
  persons from one place to another. Other means include cable
  transport and pipelines.`;

  paragraphElement.classList.add("faq__question__content");
  paragraphElement.textContent = questionContent;
  questions[0].appendChild(paragraphElement);
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      this.appendChild(paragraphElement);
    });
  });
};

const headerSlider = document.getElementById("header-slider");
const headerLeftArrow = document.getElementById("header-arrow-left");
const headerRightArrow = document.getElementById("header-arrow-right");
const headerSlices = [...document.querySelectorAll(".header__slice")];

const faqSlider = document.getElementById("faq-slider");
const faqLeftArrow = document.getElementById("faq-arrow-left");
const faqRightArrow = document.getElementById("faq-arrow-right");
const faqSlices = [...document.querySelectorAll(".faq__slice")];

const teamSlider1 = document.getElementById("team-slider1");
const teamSlider2 = document.getElementById("team-slider2");
const teamLeftArrow = document.getElementById("team-arrow-left");
const teamRightArrow = document.getElementById("team-arrow-right");
const teamSlices1 = [
  ...document.querySelectorAll("#team-slider1 .team__slice"),
];
const teamSlices2 = [
  ...document.querySelectorAll("#team-slider2 .team__slice"),
];
const img = document.getElementById("team-img");

slider(headerSlider, headerLeftArrow, headerRightArrow, headerSlices, 1);
slider(faqSlider, faqLeftArrow, faqRightArrow, faqSlices, 4);
teamSlider(teamSlider1, teamLeftArrow, teamRightArrow, teamSlices1, img);
teamSlider(teamSlider2, teamLeftArrow, teamRightArrow, teamSlices2, img);
counter();
handleFAQ();
