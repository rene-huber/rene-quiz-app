const toggleBookMarks = document.querySelectorAll(".bookmarks");
const toggleAnswers = document.querySelectorAll(".btn-answer");

toggleBookMarks.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("bookmarks_active");
  });
});

toggleAnswers.forEach((e) => {
  e.addEventListener("click", () => {
    const answer = e.parentElement.querySelector(".answer");
    answer.classList.toggle("hidden");
    e.textContent = answer.classList.contains("hidden")
      ? "Show Answer"
      : "Hide Answer";
  });
});
