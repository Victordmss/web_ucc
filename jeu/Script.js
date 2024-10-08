class Equipe 
{
    Nom;
  
    constructor(Nom) 
    {
        this.Nom = Nom;
    }
}


class Carte 
{
    Question;
    Couleur;
    Reponses;
    Id;
    Piochee;
  
    constructor(Couleur, Question, Reponses) 
    {
        this.Question = Question;
        this.Couleur = Couleur;
        this.Reponses = Reponses.split("|");
        this.Id = Math.floor(Math.random() * 100000);
        this.Piochee = false;
    }
}


var Rose
var Bleu
var ListeCartes = []
var EquipeCourante
var Mise = 0
var CaseCourante
var NumeroTour = 0
var SelectionNiveau = new Array(3).fill(false);


window.onload = function()
{
    AfficherEcranBienvenue();
    window.addEventListener('beforeunload', function(event) 
    {
        event.returnValue = "Êtes-vous sûr de vouloir quitter cette page ?";
    });
    
}


function AfficherEcranBienvenue()
{
    ListeCartes.push(new Carte(
        "Violette",
        "11 : Quelle est l'origine de la maladie du cancer ?", 
        "Une accumulation de graisse dans les vaisseaux sanguins|Une hygiène de vie trop sportive|La croissance et la morphologie anormale d'une cellule"));
    ListeCartes.push(new Carte(
        "Violette",
        "12 : Quelle caractéristique correspond aux cellules cancéreuses ?", 
        "Les cellules migrent dans les vaisseaux lymphatiques pour s’implanter dans d’autres organes (métastases)|Les cellules migrent dans les vaisseaux sanguins pour s’implanter dans d’autres organes (métastases)|Les cellules meurent au bout de quelques jours"));
    ListeCartes.push(new Carte(
        "Violette",
        "13 : Quel est le facteur de transcription permettant l’apoptose des cellules anormales qui est souvent impacté dans les causes de cancer ?", 
        "Le gène P53|La cellule B07|La vitamine C"));
    ListeCartes.push(new Carte(
        "Violette",
        "41 : Les rayons du soleil constituent un facteur favorisant les cancers de la peau.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Violette",
        "42 : Les antécédents familiaux et gènes de prédisposition sont des facteurs de risques pour le cancer du sein.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Violette",
        "43 : Les facteurs éthniques sont des facteurs de risque pour le cancer de la prostate.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Violette",
        "81: D'où provient le développement d'un cancer chez l'enfant et l'adulte ?", 
        "De la moëlle osseuse|D'une tumeur solide localisée|Des ganglions lymphatiques"));
    ListeCartes.push(new Carte(
        "Violette",
        "82: Parmis les affirmations suivantes laquelle vous semble fausse ?", 
        "Les cellules cancéreuses se multiplient activement et sont insensibles aux signaux qui devraient entraîner leur mort|Les cellules cancéreuses assurent les fonctions des cellules normales dont elles dérivent|Les tumeurs développent un réseau de vaisseaux sanguins qui leur permet d’être  alimentées en oxygène et en énergie"));
    ListeCartes.push(new Carte(
        "Violette",
        "83: Comment une cellule normale peut-elle devenir cancéreuse ?", 
        "Une telle tranformation n'existe pas, les cellules cancéreuses viennent de l'extérieur|Une cellule devient cancéreuse si elle est en contact avec une autre subsance générée par le corps humain|Une cellule devient cancéreuse par mutations successives"));
   

    ListeCartes.push(new Carte(
        "Bleue",
        "21: Quelle pratique permet de diminuer le risque de développement d'un cancer chez l'adulte ?", 
        "Se laver 2 fois par jour|Pratiquer une activité physique quotidienne|Ne boire que de l'eau"));
    ListeCartes.push(new Carte(
        "Bleue",
        "22: La leucémie est un cancer très répendu chez l'adulte.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Bleue",
        "23: Quelle forme de cancer est la plus répendue chez l'adulte ?", 
        "Le cancer du sein|Le cancer de la prostate|Le cancer colorectal"));
    ListeCartes.push(new Carte(
        "Bleue",
        "61: Le cancer du poumon et le cancer colorectal sont davantage observés chez les adultes.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Bleue",
        "62: Les cancers chez l’enfant sont identiques à ceux chez l'adulte.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Bleue",
        "63: Citez un facteur de risque pour le cancer colorectal.", 
        ""));


    ListeCartes.push(new Carte(
        "Jaune", 
        "31 : Quelle forme de cancer est la plus répendue chez l'enfant ?", 
        "Le cancer colorectal|Le cancer du sein|La leucémie"));
    ListeCartes.push(new Carte(
        "Jaune",
        "32: Les cancers chez les enfants sont considérés comme des maladies rares.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Jaune",
        "33: Quelle est la proportion d'enfants guéris d'un cancer ?", 
        "30%|50%|80%"));
    ListeCartes.push(new Carte(
        "Jaune",
        "71: Les enfants guéris du cancer peuvent avoir des séquelles plus ou moins importantes.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));
    ListeCartes.push(new Carte(
        "Jaune",
        "72: Citez une séquelle du traitement du cancer chez l’enfant après sa guérison.", 
        ""));
    ListeCartes.push(new Carte(
        "Jaune",
        "73: Les symptômes du cancer chez l’enfant sont très spécifiques et peu banals.", 
        "C'est vrai ! ✅|C'est faux... ⛔"));


    let HtmlBienvenue = `
    <form id="MenuBienvenue"  action="#" onsubmit="return DemarrerPartie();">
        <div class="PleinEcran">
            <span class="Titre">
                Démarrons une nouvelle partie
            </span>
            <span class="SousTitre" style="margin-bottom: 25vh;">
                Un jeu interactif proposé par Unis Contre le Cancer
            </span>
            <input class="ChampTexte" id="NomEquipeA" type="text" placeholder="Nom de l'équipe rose" value="" />
            <input class="ChampTexte" id="NomEquipeB" type="text" placeholder="Nom de l'équipe bleue" value="" />
            <input class="BoutonValider" class="ValiderNoms" type="submit" value="Allons-y !" />
        </div>
    </form>`;
    document.body.innerHTML += HtmlBienvenue;
}


function DemarrerPartie()
{
    console.log(ListeCartes)
    let NomA = "l'équipe rose"
    let NomB = "l'équipe bleue"
    if (document.getElementById("NomEquipeA").value)
    {
        NomA = document.getElementById("NomEquipeA").value
    }
    if (document.getElementById("NomEquipeB").value)
    {
        NomB = document.getElementById("NomEquipeB").value
    }
    document.getElementById("MenuBienvenue").remove();
    Rose = new Equipe(NomA)
    Bleu = new Equipe(NomB)
    EquipeCourante = "Bleue"

    AfficherNiveaux()
}


function AfficherCartes()
{
    ListeCartes.forEach(function(Carte) 
    {
        if (!Carte.Piochee)
        {
            let Random1 = Math.random();
            let Random2 = Math.random();
            let Random3 = Math.random();
            let HtmlCarte = `
                <div class="CarteRecto ` + Carte.Couleur + `" id="Recto` + Carte.Couleur + Carte.Id + `" style="--screenHeight: ` + window.innerHeight + `; --screenWidth: ` + window.innerWidth + `; --randomX: ` + Random1 + `; --randomY: ` + Random2 + `; --randomRotate: ` + Random3 + `;">
                    <img class="LogoCartes" src="LogoUcc.png">
                </div>`

            document.body.insertAdjacentHTML('beforeend', HtmlCarte);

            let CarteId = document.getElementById("Recto" + Carte.Couleur + Carte.Id)
            console.log("Recto" + Carte.Couleur + Carte.Id)
            console.log(CarteId)
            CarteId.addEventListener('mousemove', function(event) 
            {
                // Calculer la position de la souris par rapport au centre de l'élément
                let rect = CarteId.getBoundingClientRect();
                let mouseX = event.clientX - rect.left - rect.width / 2;
                let mouseY = event.clientY - rect.top - rect.height / 2;
        
                // Déplacer l'élément en fonction de la position de la souris
                let translateX = mouseX * 0.5;
                let translateY = mouseY * 0.5;
                CarteId.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(calc(360deg * var(--randomRotate)))`;
            });
            if (Carte.Couleur == CaseCourante)
            {
                CarteId.addEventListener('click', function(event) 
                {
                    let AutresCartes = Array.from(document.querySelectorAll('[id^="Recto"]')).filter(function(element) {
                        return element.id !== "Recto" + Carte.Couleur + Carte.Id;
                    });
                    AutresCartes.forEach(function(element) {
                        element.style.transition = "opacity 0.5s";
                        element.style.opacity = "0%";
                    });
                    setTimeout(function() 
                    {
                        CarteId.style.transition = "left 1s, top 1s";
                        CarteId.style.left = "50vw";
                        CarteId.style.top = "125vh";
                        setTimeout(function() 
                        {
                            AutresCartes.forEach(function(element) {
                                element.remove();
                            });
                            let Id = Carte.Id
                            CarteId.remove();
                            AfficherQuestion(Id)
                        }, 1000);
                    }, 500);
                });
            }
        }
    });

    setTimeout(function() 
    {
        let elements = document.querySelectorAll('[id^="Recto"]');
        elements.forEach(function(element) {
            element.style.transition = "transform 0.2s, opacity 0.5s";
            element.style.opacity = "1";
        })
    }, 100);
}


function AfficherQuestion(Id)
{
    console.log(Id)
    for (let i = 0; i < ListeCartes.length; i++) {
        if (ListeCartes[i].Id == Id) {
            Carte = ListeCartes[i];
            break;
        }
    } 
    console.log(Carte)
    let Ratio = (window.innerHeight * window.innerWidth * 0.00015)/(window.innerHeight * window.innerWidth * 0.0002)
    let Hauteur
    let Largeur
    if (window.innerHeight > window.innerWidth * Ratio)
    {
        Largeur = window.innerWidth * 0.45
        Hauteur = Largeur * (1/Ratio)
    } 
    else
    {
        Hauteur = window.innerHeight * 0.90
        Largeur = Hauteur * Ratio
    }
    
    let HtmlCarte = `
        <div class="CarteVerso ` + Carte.Couleur + `" id="Verso` + Carte.Couleur + Carte.Id + `" style="--Hauteur: ` + Hauteur + `px; --Largeur: ` + Largeur + `px;  --screenHeight: ` + window.innerHeight + `; --screenWidth: ` + window.innerWidth + `;" onclick="AfficherNiveaux()">
            <img class="LogoCartesVerso" src="LogoUcc.png">
            <span>`
        + Carte.Question + `</span></div>`
    document.body.insertAdjacentHTML('beforeend', HtmlCarte);

    let HtmlReponses = `
        <div class="Reponses" id="Reponses" style="--screenHeight: ` + window.innerHeight + `; --screenWidth: ` + window.innerWidth + `;">`
    let Compteur = 1;
    Carte.Reponses.forEach(function(Reponse) {
        HtmlReponses += "<span class=\"" + Carte.Couleur + "Texte\">Réponse " + Compteur + "</span>" + Reponse + "<br/><br/>"
        Compteur ++
    })
    HtmlReponses += "</div>"
    document.body.insertAdjacentHTML('beforeend', HtmlReponses);

    setTimeout(function() 
    {
        CarteId = document.getElementById("Verso" + Carte.Couleur + Carte.Id)
        CarteId.style.transition = "left 1s, top 1s";
        CarteId.style.left = "0vw";
        CarteId.style.top = "calc(50vh - (" + Hauteur + "px / 2))";
    }, 100);
    setTimeout(function() 
    {
        ReponsesId = document.getElementById("Reponses")
        ReponsesId.style.opacity = "100%";
    }, 600);
    
    Carte.Piochee = true
}


function AfficherNiveaux()
{
    let QuestionPrecedente = document.querySelectorAll('[id^="Verso"], [id^="Reponses"]');
    QuestionPrecedente.forEach(function(element){
        element.style.transition = "opacity 0.5s"
        element.style.opacity = "0"
    })

    let NomEquipeCourante
    if (EquipeCourante == "Bleue")
    {
        EquipeCourante = "Rose"
        NomEquipeCourante = "<span style=\"color: #bbaee1\">" + Rose.Nom + "</span>"
    } 
    else
    {
        EquipeCourante = "Bleue"
        NomEquipeCourante = "<span style=\"color: #138ec4\">" + Bleu.Nom + "</span>"
    }

    Mise = 0
    NumeroTour ++

    let HtmlNiveaux = `
    <div class="PleinEcran" id="Selection" style="justify-content: space-around; opacity: 0%;">
        <div class="SelectionCategorie"> 
            <span class="Titre">
                Pour le ` + NumeroTour + `e tour, l'équipe
            </span>
            <div class="SelectionLigne">
                <div class="SelectionItem" id="EquipeRose" onclick="SelectionnerNiveau(this)">
                    <span class="Violette SousTitre" style="padding: 25px; border-radius: 25px;">` + Rose.Nom + `</span>
                </div>
                <div class="SelectionItem" id="EquipeBleue" onclick="SelectionnerNiveau(this)">
                    <span class="Bleue SousTitre" style="padding: 25px; border-radius: 25px;">` + Bleu.Nom + `</span>
                </div>
            </div>
        </div>

        <div class="SelectionCategorie">
            <span class="Titre">
                se trouve sur une case
            </span>
            <div class="SelectionLigne">
                <div class="SelectionItem" id="CaseViolette" onclick="SelectionnerNiveau(this)">
                    <span>Le cancer, c'est quoi ?</span>
                    <img class="SelectionImage" src="Violet.png" alt="Image 1"> 
                </div>
                <div class="SelectionItem" id="CaseBleue" onclick="SelectionnerNiveau(this)">
                    <span>Les cancers chez l'adulte</span>
                    <img class="SelectionImage" src="Bleu.png" alt="Image 2">
                </div>
                <div class="SelectionItem" id="CaseJaune" onclick="SelectionnerNiveau(this)">
                    <span>Les cancers chez l'enfant</span>
                    <img class="SelectionImage" src="Jaune.png" alt="Image 1">
                </div>
            </div>
        </div>

        <div class="SelectionCategorie">
            <span class="Titre">
                et souhaite miser
            </span>
            <div class="SelectionLigne">
                <div class="SelectionItem" id="Mise1" onclick="SelectionnerNiveau(this)">
                    <span>1 point</span>
                    <img class="SelectionImage" src="Argent1.png" alt="Image 1">   
                </div>
                <div class="SelectionItem" id="Mise2" onclick="SelectionnerNiveau(this)">
                    <span>2 points</span>
                    <img class="SelectionImage" src="Argent2.png" alt="Image 2">
                </div>
                <div class="SelectionItem" id="Mise3" onclick="SelectionnerNiveau(this)">
                    <span>3 points</span>
                    <img class="SelectionImage" src="Argent3.png" alt="Image 1"> 
                </div>
            </div>
        </div>
    </div>`
    document.body.insertAdjacentHTML('beforeend', HtmlNiveaux);

    setTimeout(function() 
    {
        QuestionPrecedente.forEach(function(element){
        element.remove()
        })

        let Ecran = document.getElementById("Selection")
        Ecran.style.transition = "opacity 0.5s"
        Ecran.style.opacity = "100%"
    }, 600);
}

function SelectionnerNiveau(item)
{
    item.style.border = "5px solid white"
    let Id = item.id
    if (Id == "EquipeRose")
    {
        EquipeCourante = "Rose"
        SelectionNiveau[0] = true
    }
    if (Id == "EquipeBleue")
    {
        EquipeCourante = "Bleue"
        SelectionNiveau[0] = true
    }
    if (Id == "CaseViolette")
    {
        CaseCourante = "Violette"
        SelectionNiveau[1] = true
    }
    if (Id == "CaseBleue")
    {
        CaseCourante = "Bleue"
        SelectionNiveau[1] = true
    }
    if (Id == "CaseJaune")
    {
        CaseCourante = "Jaune"
        SelectionNiveau[1] = true
    }
    if (Id == "Mise1")
    {
        Mise = 1
        SelectionNiveau[2] = true
    }
    if (Id == "Mise2")
    {
        Mise = 2
        SelectionNiveau[2] = true
    }
    if (Id == "Mise3")
    {
        Mise = 3
        SelectionNiveau[2] = true
    }

    if(SelectionNiveau[0] && SelectionNiveau[1] && SelectionNiveau[2])
    {
        SelectionNiveau = new Array(3).fill(false);
        let Ecran = document.getElementById("Selection")
        Ecran.style.transition = "opacity 0.5s"
        Ecran.style.opacity = "0%"
        setTimeout(function() 
        {
            Ecran.remove()
            AfficherCartes()
        }, 500)
    }
}