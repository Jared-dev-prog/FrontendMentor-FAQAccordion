document.addEventListener("DOMContentLoaded", () => {
  app();
});

const icons = Array.from(document.querySelectorAll(".card__icon"));
const questions = Array.from(document.querySelectorAll(".card__question"));
const answers = Array.from(document.querySelectorAll(".card__answer"));
const contentQuestion = Array.from(document.querySelectorAll(".content__question"));

let rotationStates = new Array(icons.length).fill(false);

const app = () => {
  contentQuestion.map((question, index) => {
    question.addEventListener("click", () => toggleRotation(index));
  });
};

const toggleRotation = (position) => {
  const icon = icons[position];
  const question = questions[position];
  const answer = answers[position];

  let rotate = rotationStates[position];

  if (rotate) {
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "300ms";
    question.style.fontWeight = "400";
    answer.style.display = "none";
  } else {
    icon.style.transform = "rotate(180deg)";
    icon.style.transition = "300ms";
    question.style.fontWeight = "700";
    answer.style.display = "block";
    answer.style.fontWeight = "400";
  }

  rotationStates[position] = !rotate;
};
