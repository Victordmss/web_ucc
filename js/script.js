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

