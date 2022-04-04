//HEADER
const grandancien = ["grandancien", "Fantôme", "Loup-Garou", "Momie", "Spectre", "Zombie", "Avatar", "Sorcier", "Azathoth","ChaugnarFaugn", "Cthugha", "Cthulhu", "Dagon", "Hydra", "Elhort", "Glaaki", "Xastur", "Mordiggian", "Nodens", "Nyarlathotep", "Shub-Niggurath", "Shudde M'ell", "Tsathoggua", "Yig", "Yog-Sothoth"];

const pitchverbe = ["pitchverbe", "Voler", "Tuer", "Empecher", "Usurper", "Kidnapper", "Interroger", "Comprendre", "Observer", "Annihiler", "Exterminer", "Entraver", "Bluffer", "Duper", "Explorer", "Etudier", "Analyser", "Lire", "Photographier", "Planifier", "Contrecarrer", "Dénoncer", "Divulguer", "Trahir", "Induire", "Produire", "Créer", "Absorber", "Rapporter", "Conjurer", "Chasser"];

const cible = ["cible", "Ouvrage", "Chef d'un culte", "Cultiste", "Sorcier", "Etranger", "Haut-placé", "Gangster", "Dague", "Carte", "Artefact", "Coordonnées", "Clef", "Pierre magique", "Sortilege", "Malédiction"];

//SECTION 1
const omen = ["omen", "Oui", "Oui, mais...", "Oui, et...", "Non", "Non, mais...", "Non, et..."];

const direction = ["Nord", "Nord-Est", "Est", "Sud-Est", "Sud", "Sud-Ouest", "Ouest", "Nord-Ouest"];

const meteo = ["meteo", "Soleil", "Nuageux", "Brumeux", "Pluvieux", "Légère Averse", "Averse", "Orage", "Neige", "Grelle", "Givre", "Froid", "Humide", "Chaud", "Moite", "Etouffant"];

const etoile = ["etoile", 0, 1, 2, 3, 4, 5];

const lieu = ["lieu", "Maison", "Bicoque", "Demeure", "Ferme", "Immeuble", "Egout", "Cave", "Lac", "Etang", "Grotte", "Magasin", "Laboratoire", "Casse", "Bar", "Hotel", "Troquet", "Décheterie", "Manoir", "Jardin", "Potager", "Eglise", "Donjon", "Caveau", "Cimetierre", "Morgue", "Bateau", "Carcasse", "Boutique", "Théatre", "Cinéma", "Hangar", "Dock", "Port", "Herbes", "Végétation"];

//SECTION 2
const verbe = ["verbe", "Manger", "Boire", "Regarder", "Mettre", "Prendre", "Observer", "Dissimuler", "Acheter", "Se Promener", "Travailler", "Travailler", "Etudier", "Lire", "Epier", "Parler", "Bavarder", "Discuter", "Se Battre", "Dormir", "Marcher", "Courir", "Porter", "Vendre", "Marchander"];

const personnage = ["personnage", "Garçon", "Fille", "Homme", "Femme", "Vieux", "Vieille", "Malade", "Laid", "Chat", "Chien", "Animal", "Commerçant", "Paysan", "Habitant", "Pêcheur", "Menuisier", "Policier", "Ecrivain", "Artiste", "Explorateur", "Militaire", "Journaliste", "Homme de foi", "Gangster", "Clochard", "Agent", "Antiquaire","Archéologue", "Bibliothécaire", "Libraire", "Financier", "Gouvernante", "Dandy", "Marin", "Mécanicien", "Officier", "Ouvrier", "Ouvrier", "Psychiatre", "Pilote", "Scientifique", "Soldat"];

const objet = ["objet", "Clef", "Journal", "Livre", "Article", "Dague", "Arme", "Outil", "Véhicule", "Monnaie", "Aliment", "Liquide", "Boite", "Caisse", "Meuble", "Lettre", "Tissu", "Médicaments"];

const caractere = ["caractere", "Ambitieux", "Anxieux", "Tourmenté", "Autoritaire", "Cérébral", "Réfléchi", "Cupide", "Curieux", "Débonnaire", "Exubérant", "Flegmatique", "Insouciant", "Intègre", "Léthargique", "Manipulateur", "Niais", "Obsessionnel", "Opiniâtre", "Pragmatique", "Taciturne", "Timide", "Vertueux", "Vicieux", "Joueur", "Mystérieux", "Enigmatique"];

const etatdesprit = ["etatdesprit", "Très Amical", "Amical", "Neutre", "Méfiant", "Hostile"];

const adjectif = ["adjectif", "Sale", "Grand", "Petit", "Ancien", "Célèbre", "Minable", "Bigot", "Usé", "Luxueux", "Peu-fiable", "De Qualité", "Magique", "Étranger", "Customisé", "Artisanal", "Manufacturé", "Puissant", "Faible", "Voyant", "Populaire", "Bon Marché", "Poussièreux", "Délabré", "Décoloré", "Cassé", "Cassé", "Amélioré", "Abimé", "Etrange"];

const secret = ["secret", "Financier", "Famille", "Professionnel", "Contact", "Médical", "Handicape", "Tic", "Politique", "Mœurs", "Commercial", "Opinion", "Taboo"];

//FOOTER
const cliffhanger = ["cliffhanger", "Combat", "Combat", "Enigme",  "Test de Compétence ou Carac", "Conversation", "Transaction(Service Objet)","Transaction(Quete Argent)", "Scène Esthétique", "Mini-Jeu"];

const pointderegle = ["pointderegle", "Test Simple", "Test Opposé", "Adversité", "Exploiter à 100% une compétence", "Attribut", 
"Attribut vs Attribut", "Attribut + Compétence", "Faire plusieurs choses", "Aide", "Chance", "Complet // moitié // quart", "Se dépêcher", "Urgence", "Prendre temps", "Degré de maitrise", "Test prolongé", "Prêt à tirer", "Les deux sont surpris", "Surpris",
"Dépourvu", "Ciblé", "A deux armes", "Plusieurs cibles", "Charge", "Coups furieux"];

const recompense = ["recompense", "Objet", "Argent", "Information", "Rumeur", "Allié", "Indice Précieux", "Informations sur l'univers", "Object"];

var bouton1 = document.getElementById('b1');
var bouton2 = document.getElementById('b2');
var bouton3 = document.getElementById('b3');
var fleche = document.getElementById('fleche');
var distances = document.getElementById('distances');
var body = document.querySelector('body');
body.style.backgroundColor = "lightgray";


function creation(tab) {
    var num = Math.floor((Math.random() * tab.length));
    while (num == 0) {
        num = Math.floor((Math.random() * tab.length));
    }
    var gran = document.getElementById(tab[0]);
    gran.innerHTML = tab[num];
}

function cardinal() {
    var num = Math.floor((Math.random() * direction.length - 1));
    fleche.style.transform = "rotate(" + 45 * num + "deg)";
}

function distance() {
    var num = Math.floor(Math.random() * 60);
    distances.innerHTML = num * 10 + "m";
}

var starr = document.getElementById('etoile');

function etoileur() {
    var num = Math.floor(Math.random() * 6); 
    starr.innerHTML = "";
    for (var i = 0; i < num; i++) {
        starr.innerHTML += '<div class="star"></div>'
    }
}
/*------------BOUTONS----------------*/

bouton1.addEventListener('click', function() {
    creation(grandancien);      /*IMPORTANT la fonction tel quelle ne marche pas, il faut mettre la fonction dans une autre*/
    creation(pitchverbe);
    creation(cible);
})

var temps = Math.floor(Math.random() * 4);
var boolean = true;
bouton2.addEventListener('click', function() {
    if (boolean === true) {
        creation(meteo);
        boolean = false;
    }
    creation(omen);      
    cardinal();
    distance();
    etoileur();
    creation(lieu);
    creation(verbe);
    creation(personnage);
    creation(objet);
    creation(caractere);
    creation(etatdesprit);
    creation(adjectif);
    creation(secret);
    temps++;
    if (temps > 5) {
        creation(meteo);
        temps = Math.floor(Math.random() * 4);
    }
})


bouton3.addEventListener('click', function() {
    creation(cliffhanger);      
    creation(pointderegle);
    creation(recompense);
})

/*----------PNJ--------------- */
var bouton4 = document.getElementById('b4');

var prenom = document.getElementById('prenom');
var nom = document.getElementById('nom');
var statistique = document.getElementById('statistique');
var spe = document.getElementById('spe');
var ptsvie = document.getElementById('ptsvie');
var imp = document.getElementById('imp');
var principale = document.getElementById('principale');
var secondaire = document.getElementById('secondaire');
var usuelle1 = document.getElementById('usuelle1');
var usuelle2 = document.getElementById('usuelle2');
var faible = document.getElementById('faible');

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const personj = [
    {
        stat: "Faible",
        caracp: 14,
        caracm: 10,
        pv:8,
        impact:"-2",
        specialite: "50%",
        principale: "50%",
        secondaire: "25%",
        usuelle1: "25%",
        usuelle2: "10%",
        faible: "10%",
    },
    {
        stat: "Ordinaire",
        caracp: 16,
        caracm: 12,
        pv:12,
        impact:0,
        specialite: "75%",
        principale: "50%",
        secondaire: "50%",
        usuelle1: "25%",
        usuelle2: "25%",
        faible: "10%",
    },
    {
        stat: "Supérieur",
        caracp: 18,
        caracm: 14,
        pv:16,
        impact:"+2",
        specialite: "90%",
        principale: "75%",
        secondaire: "50%",
        usuelle1: "50%",
        usuelle2: "25%",
        faible: "25%",
    }
]

function alp() {
    return Math.floor(Math.random() * 26)
};

function definirstat() {
    return Math.floor(Math.random() * 3)
};

function randomizer() {
    var arr = ["Connaiss.", "Savoir-faire", "Sensorielle", "Influence", "Action"];
    var newArr = [];
    function tab() {
        var i = Math.floor(Math.random() * arr.length - 1);
        var cc = arr.splice(i, 1);
        newArr.push(cc[0]);
    }
    tab();
    tab();
    tab();
    tab();
    tab();
    //console.log(newArr);
    return newArr;

}

randomizer();

function creationpnj() {
    prenom.innerHTML = alphabet[alp()];
    nom.innerHTML = alphabet[alp()];

    var index = definirstat();
    statistique.innerHTML = personj[index].stat;
    spe.innerHTML = "Profession: " + personj[index].specialite;
    ptsvie.innerHTML = personj[index].pv + " PV";
    imp.innerHTML = "Impact: " + personj[index].impact;

    
    var tableau = randomizer();
    console.log(tableau)


    principale.innerHTML = tableau[0] + " " + personj[index].principale;
    secondaire.innerHTML = tableau[1] + " " + personj[index].secondaire;
    usuelle1.innerHTML = tableau[2] + " " + personj[index].usuelle1;
    usuelle2.innerHTML = tableau[3] + " " + personj[index].usuelle2;
    faible.innerHTML = tableau[4] + " " + personj[index].faible;


}



bouton4.addEventListener('click', creationpnj);   /*important sans les () */






