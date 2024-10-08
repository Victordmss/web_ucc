/* ================================================================================ */
/*                          SITE WEB DE L'ASSOCIATION UCC                           */
/* ================================================================================ */
/* Nom du fichier  : script.js                                                      */
/* Type de fichier : script d'exécution (.js)                                       */
/* Auteurs         : Léo MULLIER                                                    */
/* Créé le         : 21/04/2022                                                     */
/* Mis à jour le   : 01/09/2022                                                     */
/* ================================================================================ */


/* ========== POSITIONNEMENT ET MISE A L'ECHELLE DU LOGO ========== */
function deplacer_logo_principal ()
{
    // Initialisations
    let logo = document.getElementById("logo_principal")
    let hauteur_main = window.innerHeight - 75
    let body_scroll = window.pageYOffset
    //console.log("scroll = " + body_scroll)

    if(body_scroll < hauteur_main)
    {
        // Déplacement du logo du centre vers le haut de l'écran
        // Réglage de la hauteur variable du logo
        let height_coeff = (-300) / hauteur_main
        let height_ordonnee = 400
        let height_valeur = height_coeff * body_scroll + height_ordonnee
        logo.style.height = height_valeur + "px"
        //console.log("height = " + logo.style.height)

        // Réglage du top variable du logo
        let top_coeff = ((height_valeur - hauteur_main - 75) /2) / (hauteur_main)
        let top_ordonnee = (hauteur_main + 75 - height_valeur) /2
        let top_valeur = top_coeff * body_scroll + top_ordonnee
        logo.style.top = top_valeur + "px"
        //console.log("top = " + logo.style.top)

        // Réglage du left variable du logo
        logo.style.left= "calc(50% - " + height_valeur + "px / 2)"
        //console.log("top = " + logo.style.top)

    } else {
        // Position fixe du logo en haut de l'écran
        logo.style.top = "0px"
        logo.style.height= "100px"
        logo.style.left= "calc(50% - 50px)"
    }
}


/* ========== DEPLACER L'ARRIERE PLAN ========== */
function acces_accueil ()
{
    window.location.assign("index.html")
}


/* ========== DEPLACER L'ARRIERE PLAN ========== */
function deplacer_arriere_plan ()
{
    // Initialisations
    let fond = document.getElementById("arriere_plan")
    let fond_top = fond.offsetTop
    //console.log("offsettop:" + fond_top)


    let hauteur_main = window.innerHeight - 75
    let body_scroll = window.pageYOffset
    ///console.log("scroll = " + body_scroll)

    if(body_scroll < hauteur_main)
    {
        fond.style.top = "calc(-1 * (" + body_scroll + "px / 2))"
    } else {
        //console.log("moitié passée")
        fond.style.top = "calc(-1 * (" + hauteur_main + "px / 2))"
    }
}


/* ========== AFFICHER / MASQUER TITRE UCC ========== */
function afficher_masquer_titre_ucc()
{
    let titre = document.getElementById("titre_principal")
    let body_scroll = window.pageYOffset

    if(body_scroll == 0)
    {
        titre.style.visibility = "visible"
        titre.style.opacity = "1"
    } else {
        titre.style.visibility = "hidden"
        titre.style.opacity = "0"
    }
}


/* ========== AFFICHER / MASQUER ETOILES ========== */
function afficher_masquer_etoiles()
{
    let img = document.getElementById("etoiles")
    let body_scroll = window.pageYOffset

    if(body_scroll == 0)
    {
        img.style.visibility = "visible"
        img.style.opacity = "1"
    } else {
        img.style.visibility = "hidden"
        img.style.opacity = "0"
    }
}


/* ========== AFFICHER / MASQUER LOGO SCROLLING ========== */
function afficher_masquer_logo_scroll()
{
    let logo_scroll = document.getElementById("logo_scroll")
    let body_scroll = window.pageYOffset

    if(body_scroll == 0)
    {
        logo_scroll.style.visibility = "visible"
        logo_scroll.style.opacity = "0.5"
        logo_scroll.style.transition = "visibility 0.5s 1s, opacity 0.5s 1s linear"
    } else {
        logo_scroll.style.visibility = "hidden"
        logo_scroll.style.opacity = "0"
        logo_scroll.style.transition = "visibility 0.5s, opacity 0.5s linear"
    }
}


/* ==========  ========== */
window.onorientationchange = (event) => {
    deplacer_arriere_plan();
    afficher_masquer_titre_ucc();
    afficher_masquer_etoiles();
    afficher_masquer_logo_scroll();
    deplacer_logo_principal();
}


window.onload
{
    deplacer_logo_principal()
    deplacer_arriere_plan()
    afficher_masquer_titre_ucc()
    afficher_masquer_etoiles()
    afficher_masquer_logo_scroll()
}