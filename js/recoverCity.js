// Fonction pour traiter la soumission du formulaire
function handleFormSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    const city = document.getElementById('city').value;

    const formData = new FormData(); // Crée un objet FormData
    formData.append('city', city); // Ajoute la valeur de la zone de texte à FormData

    fetch('pages/looking.html', {
        method: 'POST',
        body: formData
    })
    .then(response => {
      // Gérer la réponse de la nouvelle page ici
      console.error('Ville :', city); // ! a changer
    })
    .catch(error => {
        console.error('Erreur lors de la soumission du formulaire', error);
    });
}

// Récupère le formulaire de l'utilisateur
const userForm = document.getElementById('userForm');

// Ajoute un événement de soumission de formulaire
userForm.addEventListener('submit', handleFormSubmit);
