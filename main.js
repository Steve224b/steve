// Créer un élément de vidéo
var maVideo = document.createElement("video");

// Définir les attributs de la vidéo
maVideo.src = "/media/66dbc091.mp4";
maVideo.controls = true;

// Ajouter la vidéo à la page
var monDiv = document.getElementById("monDiv");
monDiv.appendChild(maVideo);

maVideo.addEventListener("play", function() {
    console.log("La vidéo a commencé à jouer");
});

maVideo.addEventListener("pause", function() {
    console.log("La vidéo a été mise en pause");
});

maVideo.addEventListener("ended", function() {
    console.log("La vidéo est terminée");
});