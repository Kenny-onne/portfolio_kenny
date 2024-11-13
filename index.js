let containerEts = document.getElementsByClassName("intitule");

// Convertir la collection en tableau pour itérer
Array.from(containerEts).forEach((element) => {
  gsap.to(element, {
    top: -45,
    repeat: -1, // Animation infinie
    yoyo: true, // Revenir à la position d'origine
    duration: 1 // Durée de l'animation
  });
});