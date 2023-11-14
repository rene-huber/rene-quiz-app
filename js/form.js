const form = document.querySelector('[data-js="formNewQuestion"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');
const resultContainer = document.querySelector('[data-js="result-container"]');

const CountQuestion = document.querySelector('[data-js="CountQuestion"]');
const CountAnswer = document.querySelector('[data-js="CountAnswer"]');
const maxLengthText = questionInput.maxLength; //150 caracteres

//func count text characters left
function updateCountText(inputFields, CountValue) {
  const remainingText = maxLengthText - inputFields.value.length;
  CountValue.textContent = remainingText + " characters left";
}
questionInput.addEventListener("input", () => updateCountText(questionInput, CountQuestion));
answerInput.addEventListener("input", () => updateCountText(answerInput, CountAnswer));


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const card = document.createElement("div");
  card.classList.add("card");

  const questionElement = document.createElement("p");
  questionElement.textContent = `Question: ${data.question}`;

  const answerElement = document.createElement("p");
  answerElement.textContent = `Answer: ${data.answer}`;

  const tagElement = document.createElement("p");
  tagElement.textContent = `Tag: ${data.tag}`;

  card.append(questionElement, answerElement, tagElement);

  form.after(card);

  //restart form values and counter > submit event
  questionInput.value = "";
  answerInput.value = "";
  tagInput.value = "";

  updateCountText(questionInput, CountQuestion);
  updateCountText(answerInput, CountAnswer);
});
