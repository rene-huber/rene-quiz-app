
  const form = document.querySelector('[data-js="formNewQuestion"]');
  const questionInput = document.querySelector('[data-js="question"]');
  const answerInput = document.querySelector('[data-js="answer"]');
  const resultContainer = document.querySelector('[data-js="result-container"]');

  
  const CountQuestion = document.querySelector('[data-js="CountQuestion"]');
  const CountAnswer = document.querySelector('[data-js="CountAnswer"]');
  const maxLengthText = questionInput.maxLength;


  questionInput.addEventListener('input', () => updateCountText(questionInput, CountQuestion));
  answerInput.addEventListener('input', () => updateCountText(answerInput, CountAnswer));

  function updateCountText(inputFields, CountValue) {
    const remainingText = maxLengthText - inputFields.value.length;
    CountValue.textContent = remainingText + ' characters left';
    
  }

  // Agrega un controlador de eventos al formulario

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Create elements for the card
    const card = document.createElement('div');
    card.classList.add('card');

    const questionElement = document.createElement('p');
    questionElement.textContent = `Question: ${data.question}`;

    const answerElement = document.createElement('p');
    answerElement.textContent = `Answer: ${data.answer}`;

    const tagElement = document.createElement('p');
    tagElement.textContent = `Tag: ${data.tag}`;

    // Append elements to the card
    card.append(questionElement);
    card.append(answerElement);
    card.append(tagElement);

    // Append the card after the form
    form.after(card);
});

