function promotion(année) {
    var image;
    if (année == 2021) {
        image = "Pictures/promotion 2021.jpg"
    }
    else if (année == 2022) {
        image = "Pictures/promotion 2022.JPG"
    }
    else {
        image = "Pictures/promotion 2023.JPG"
    }
    document.getElementById('nomImage').src = image ;
}

document.getElementById('formulairerechercheJS').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire
    const mot_recherché = document.getElementById('recherche mot').value.toLowerCase(); // Récupérer le mot clé et convertir en minuscules
    const résultats = document.getElementById('resultats'); // Div où les résultats seront affichés
    résultats.innerHTML = ''; // Réinitialiser le contenu des résultats
    const pages = ['Cérémonies.html', 'Médias.html', 'GI 4.0 ENSIBS.html']; // Liste des pages à rechercher

    // Parcourir chaque page et effectuer la recherche
    pages.forEach(page => {
        fetch(page) // fetch : obtenir le contenu de la page
            .then(response => response.text()) // Convertir la réponse en texte
            .then(data => {
                // Vérifier si le mot-clé est présent dans le contenu de la page
                if (data.toLowerCase().includes(mot_recherché)) {
                    // Si trouvé, ajouter un lien vers la page dans les résultats
                    résultats.innerHTML += `<div><a href="${page}">${page}: Mot-clé trouvé</a></div>`;
                } else {
                    // Si non trouvé, indiquer que le mot-clé n'est pas présent
                    résultats.innerHTML += `<div>${page}: Mot-clé non trouvé</div>`;
                }
            })
            .catch(() => {
                résultats.innerHTML += `<div>${page}: Erreur lors de la récupération de la page</div>`;
            });
    });
});