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
  }, 4000);
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

  if (lastClickedAnswer && lastClickedAnswer !== answer) {
    lastClickedAnswer.style.display = "none";
  }

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    lastClickedAnswer = answer;
  } else {
    answer.style.display = "none";
    lastClickedAnswer = null;
  }
}
