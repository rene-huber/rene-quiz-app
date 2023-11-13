
const toggleMarks = document.querySelectorAll('.bookmarks');


toggleMarks.forEach((e) => {
    e.addEventListener('click', () => {
      // Toggle de la clase 'active'
      e.classList.toggle('bookmarks_active');
      console.log('click');
    });

  });

  document.querySelectorAll('.btn-answer').forEach(button =>
    button.addEventListener('click', function() {
      const answer = this.closest('.card').querySelector('.answer');
      answer.classList.toggle('hidden');
      this.textContent = answer.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
    })
  );