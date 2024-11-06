/* ================================================================================ */
/*                          SCRIPT DU SITE WEB DE L'ASSOCIATION UCC                   */
/* ================================================================================ */
/* Nom du fichier     : script.js                                                   */
/* Type de fichier    : fichier JavaScript (.js)                                    */
/* Créateur           : Victor Demessance                                          */
/* Créé le            : 08/10/2024                                                 */
/* ================================================================================ */



// Fonction d'affichage du texte supplémentaire de l'historique de l'association
function toggleText() {
    var text = document.getElementById("additional-text");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


// Fonction de gestion duc carousel de présentation 

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let intervalSlidingCarousel = setInterval(nextSlide, 8000);

function showSlide(index) {
    currentIndex = (currentIndex + 1) % totalItems;
    console.log(currentIndex);


    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    resetInterval();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Réinitialiser l'intervalle
function resetInterval() {
    clearInterval(intervalSlidingCarousel);
    intervalSlidingCarousel = setInterval(nextSlide, 8000);
}

