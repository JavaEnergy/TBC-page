const carouselImages = document.querySelector(".carousel-images");
const sets = carouselImages.querySelectorAll(".set");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");

let currentSet = 0;
let autoSlideInterval;

const slideSets = () => {
  sets.forEach((set, index) => {
    set.style.display = index === currentSet ? "flex" : "none";
  });
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    currentSet = (currentSet + 1) % sets.length;
    slideSets();
  }, 8000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  currentSet = (currentSet + 1) % sets.length;
  slideSets();
  startAutoSlide();
});
prevButton.addEventListener("click", () => {
  stopAutoSlide();
  currentSet = (currentSet - 1 + sets.length) % sets.length;
  slideSets();
  startAutoSlide();
});

slideSets();
startAutoSlide();

var lastClickedAnswer = null;

function toggleAnswer(answerClass) {
  var answer = document.querySelector("." + answerClass);
  var arrow = answer.previousElementSibling.querySelector(".arrow");

  if (lastClickedAnswer && lastClickedAnswer !== answer) {
    lastClickedAnswer.style.height = "0px";
    lastClickedAnswer.previousElementSibling
      .querySelector(".arrow")
      .classList.remove("rotate");
  }

  if (answer.style.height === "0px" || answer.style.height === "") {
    answer.style.height = answer.scrollHeight + "px";
    arrow.classList.add("rotate");
    lastClickedAnswer = answer;
  } else {
    answer.style.height = "0px";
    arrow.classList.remove("rotate");
    lastClickedAnswer = null;
  }
}
