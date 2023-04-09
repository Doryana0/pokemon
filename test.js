// Sélectionner un élément
const bouton = document.querySelector('Bouton');

// Sélectionner plusieurs éléments puis faire une boucle pour modifier chaque élément.
const elements = document.querySelectorAll('.elements');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = 'red';
}

// Ecouter un évènement
bouton.addEventListener('click', function() {

  // Modifier le style d’un élément en JS
  this.style.backgroundColor = 'green';

  // Insérer du contenu ou remplacer le contenu en JS
  this.innerHTML = 'OK';

  // Modifier, supprimer, ou ajouter une class en JS
  this.classList.add('click');

  // Réagir à un évènement
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'yellow';
  }
});

