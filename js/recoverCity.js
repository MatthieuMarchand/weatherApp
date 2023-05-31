let currentCity = null;

function handleFormSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut
    currentCity = document.getElementById('currentCity').value;
    localStorage.setItem('currentCity', currentCity);
    window.location.href = 'pages/looking.html';
}

const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', handleFormSubmit); // événement de soumission de formulaire