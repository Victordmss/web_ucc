/* ================================================================================ */
/*                          SCRIPT DU SITE WEB DE L'ASSOCIATION UCC                   */
/* ================================================================================ */
/* Nom du fichier     : script.js                                                   */
/* Type de fichier    : fichier JavaScript (.js)                                    */
/* Créateur           : Victor Demessance                                          */
/* Créé le            : 08/10/2024                                                 */
/* ================================================================================ */



// Fonction d'affichage/suppression d'une section 
function toggleText(id) {
    var text = document.getElementById(id);
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


// Fonction pour afficher ou masquer le popup
function togglePopup() {
    const popup = document.getElementById('popup-equipe');
    if (popup.style.display === 'flex') {
      popup.style.display = 'none';
    } else {
      popup.style.display = 'flex';
    }
  }
  
  // Fermer le popup si on clique en dehors du contenu
  window.onclick = function(event) {
    const popup = document.getElementById('popup-equipe');
    if (event.target === popup) {
      popup.style.display = 'none';
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

