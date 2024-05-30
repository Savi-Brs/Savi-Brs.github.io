/* Fonction handleSubmit pour gérer la soumission du formulaire */
function handleSubmit(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupère l'élément formulaire avec l'identifiant 'contact-form'
    const form = document.getElementById('contact-form');

    // Encode le corps du message du formulaire pour l'inclure dans une URL
    const body = encodeURIComponent(
        `Nom: ${form.nom.value}\n` + // Récupère et encode le nom de famille
        `Prénom: ${form.prenom.value}\n` +
        `Adresse email: ${form.email.value}\n` +
        `Date de naissance: ${form.date.value}\n` +
        `Formations souhaitées: ${form.formations.value}\n` +
        `Actuellement, vous êtes: ${form.annee.value}\n` +
        `Langues parlées: ${Array.from(document.querySelectorAll('input[name="langues"]:checked'))
            .map(langue => langue.value)
            .join(', ')}\n\n` +
        `Demande spécifique: \n${form.demande.value}`
    );

    // Rediriger vers messagerie
    window.location.href = `mailto:savinien.barusseau@gmail.com?body=${body}`;
}
