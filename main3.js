document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector('.loading').style.display = 'none';
    }, 1200);
  });

//js klik kanan
document.addEventListener('contextmenu', function (e) {
  e.preventDefault(); // Mencegah munculnya menu konteks (klik kanan)
});

document.addEventListener('keydown', function (e) {
  // Mencegah kombinasi tombol yang biasanya digunakan untuk membuka DevTools
  if ((e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
      (e.keyCode == 123)) { // F12
    e.preventDefault();
  }
});


//js nama
document.addEventListener('DOMContentLoaded', function () {
  
  const storedName = localStorage.getItem('userName');

  const navbarBrand = document.querySelector('.navbar-brand h1');

 
  if (navbarBrand && storedName) {
    navbarBrand.innerHTML = ` <i class="bi bi-person-fill"></i> ${storedName}`;
  }
});



//js acak 
document.addEventListener('DOMContentLoaded', function () {
  // Fungsi untuk mengacak urutan elemen form-check di dalam parent
  function shuffleFormChecks(parent) {
    const formChecksArray = Array.from(parent.querySelectorAll('.form-check'));
    formChecksArray.forEach(elem => {
      parent.removeChild(elem);
    });

    formChecksArray.sort(() => Math.random() - 0.5);

    formChecksArray.forEach(elem => {
      parent.appendChild(elem);
    });
  }

  // Mengambil elemen card-body dan mengacak urutan radio button di dalamnya
  const cardBodies = document.querySelectorAll('.card-body');
  cardBodies.forEach(function (cardBody) {
    shuffleFormChecks(cardBody);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  
  var container = document.querySelector('.card-body');

 
  container.addEventListener('click', function (event) {
   
    if (event.target.tagName === 'LABEL') {
      
      var radioInput = event.target.previousElementSibling;

      
      radioInput.checked = true;
    }
  });
});

//js nilai 
document.addEventListener('DOMContentLoaded', function () {
  
  document.getElementById('kirim').addEventListener('click', function () {
   
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  
    if (radioButtons.length === 0) {
     
      console.error('Please select an answer for each question.');
      return;
    }

    const selectedValues = [];

    
    radioButtons.forEach(function (radioButton) {
      selectedValues.push(parseInt(radioButton.value));
    });

    localStorage.setItem('nilai', JSON.stringify(selectedValues));

    window.location.href = 'hasil.html';
  });
});