document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector('.loading').style.display = 'none';
    }, 1000);
  });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const quizSelect = document.querySelector('.form-select');

  if (form && nameInput && quizSelect) {
   
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const enteredName = nameInput.value;
      const selectedQuiz = quizSelect.options[quizSelect.selectedIndex].id;

     
      if (enteredName.trim() !== '' && selectedQuiz) {
        
        localStorage.setItem('userName', enteredName);
        localStorage.setItem('selectedQuiz', selectedQuiz);

      
        window.location.href = selectedQuiz + '.html';
      } else {
        alert('Mohon lengkapi Nama dan Pilih Quiz terlebih dahulu.');
      }
    });
  }
});