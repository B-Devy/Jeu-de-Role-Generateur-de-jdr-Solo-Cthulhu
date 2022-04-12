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

const recompense = ["recompense", "Objet", "Argent", "Information", "Rumeur", "Allié", "Indice Précieux", "Informations sur l'univers"];

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
    pdr();
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
    return newArr;
}

function creationpnj() {
    prenom.innerHTML = alphabet[alp()];
    nom.innerHTML = alphabet[alp()];

    var index = definirstat();
    statistique.innerHTML = personj[index].stat;
    spe.innerHTML = "Profession: " + personj[index].specialite;
    ptsvie.innerHTML = personj[index].pv + " PV";
    imp.innerHTML = "Impact: " + personj[index].impact;

    var tableau = randomizer();

    principale.innerHTML = tableau[0] + " " + personj[index].principale;
    secondaire.innerHTML = tableau[1] + " " + personj[index].secondaire;
    usuelle1.innerHTML = tableau[2] + " " + personj[index].usuelle1;
    usuelle2.innerHTML = tableau[3] + " " + personj[index].usuelle2;
    faible.innerHTML = tableau[4] + " " + personj[index].faible;

    weaponizer();
}

bouton4.addEventListener('click', creationpnj);   /*important sans les () */

/*-----------MAP----------------*/
var carre = document.querySelectorAll('#mapgrid > div');
var token = document.querySelectorAll('.token');
var map = document.getElementById('map');

map.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

carre.forEach( (e) => {
    e.addEventListener('click', function() {
        this.classList.toggle('tokenred');
        this.classList.toggle('carre');
    });
});

carre.forEach( (e) => {
    e.addEventListener('contextmenu', function() {
        this.classList.toggle('tokenblue');
        this.classList.toggle('carre');
    });
});

/*-------------ZOOM MAP------------------------*/
var bouton5 = document.getElementById('b5');
var bouton6 = document.getElementById('b6');
var mapgrid = document.getElementById('mapgrid');
const phrase = '<div class="carre"></div>\n';

bouton6.addEventListener('click', function() {
    mapgrid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    mapgrid.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    mapgrid.innerHTML = "";
    for (var i = 1; i <= 400; i++ ) {
        mapgrid.innerHTML += phrase;


    }
});

bouton5.addEventListener('click', function() {
    mapgrid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    mapgrid.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    mapgrid.innerHTML = "";
    
    for (var i = 1; i <= 100; i++ ) {

        mapgrid.innerHTML += phrase;

    }
});

/*-------------ARMES---------------*/
const armes = [
    {
        nom: "Epée",
        modif: "-10%",
        dgt: "1d6+1",
        portee: "Contact",
        cad: "",
        mun: ""
    },
    {
        nom: "Hache de Bûcheron",
        modif: "0%",
        dgt: "1d8+2",
        portee: "Contact",
        cad: "",
        mun: ""
    },
    {
        nom: "Petit couteau",
        modif: "+5%",
        dgt: "1d4",
        portee: "Contact",
        cad: "",
        mun: ""
    },
    {
        nom: "Poignard",
        modif: "+5%",
        dgt: "1d4+2",
        portee: "Contact",
        cad: "",
        mun: ""
    },
    {
        nom: "Batte",
        modif: "+5%",
        dgt: "1d8",
        portee: "Contact",
        cad: "",
        mun: ""
    },
    {
        nom: "Revolver 32",
        modif: "0%",
        dgt: "1d8",
        portee: "Courte",
        cad: "3",
        mun: "6"
    },
    {
        nom: "Pistolet Auto.38",
        modif: "0%",
        dgt: "1d10",
        portee: "Proche",
        cad: "2",
        mun: "6"
    },
    {
        nom: "Revolver 45",
        modif: "0%",
        dgt: "1d10+2",
        portee: "Proche",
        cad: "1",
        mun: "6"
    },
    {
        nom: "Carabine cal.30",
        modif: "+5%",
        dgt: "2d6",
        portee: "Loin",
        cad: "2",
        mun: "6"
    },
    {
        nom: "Carabine cal.30-06",
        modif: "+5%",
        dgt: "2d6+4",
        portee: "Loin",
        cad: "1",
        mun: "5"
    },
    {
        nom: "Fusil cal.20",
        modif: "+10%",
        dgt: "2d6",
        portee: "Proche",
        cad: "2",
        mun: "2"
    },
    {
        nom: "Fusil cal.12",
        modif: "+10%",
        dgt: "4d6",
        portee: "Proche",
        cad: "2",
        mun: "2"
    }
]

var liste = document.getElementById('liste');
var modif = document.getElementById('modif');
var dgt = document.getElementById('dgt');
var portee = document.getElementById('portee');
var cadence = document.getElementById('cadence');
var munitions = document.getElementById('munitions');


liste.addEventListener('change', function() {

    modif.innerHTML = armes[liste.value]["modif"];
    dgt.innerHTML = armes[liste.value]["dgt"];
    portee.innerHTML = armes[liste.value]["portee"];
    cadence.innerHTML = armes[liste.value]["cad"];
    munitions.innerHTML = armes[liste.value]["mun"];

})

function weaponizer() {
    var num = Math.floor(Math.random() * armes.length);
    liste.value = num;

    modif.innerHTML = armes[liste.value]["modif"];
    dgt.innerHTML = armes[liste.value]["dgt"];
    portee.innerHTML = armes[liste.value]["portee"];
    cadence.innerHTML = armes[liste.value]["cad"];
    munitions.innerHTML = armes[liste.value]["mun"];
}

/*--------------POINTS DE REGLES-------------------*/

const ptsdre = [
    {nom:"Test Simple", text:"Effectué un test au d100 sous la compétence du personnage."}, 
    {nom:"Test Opposé", text:"Effectué un test de compétence du joueur et un test pour l'ennemi. La meilleur qualité de réussite gagne, sinon la meilleur marge gagne. Il arrive que l'on privilégie le joueur en cas d'égalité.\nExemple d'opposition: \nDiscrétion vs Vigilance, Corps à c vs Corps à c,\n Arme à F vs Athlétisme, Arme bl vs Arme bl,\n Conduite vs Conduite, Baratin vs Perspicacité,\n Ecouter vs Discrétion, Négociation vs Négociation,\n Dissimulation vs TOC, TOC vs Se Cacher,\n Jeu vs Jeu."}, 
    {nom:"Adversité", text:"Test opposé contre\n Faible: 10% // Modéré: 20%  //  Important: 50%  //  Forte: 75%  //  Intense: 90%"}, 
    {nom:"Exploiter à 100% une comp.", text:"Exploiter à 100% une compétence demande une réussite Spéciale au moins."}, 
    {nom:"Attribut", text:"Attribut: identique au test simple."}, 
    {nom:"Attribut vs Attribut", text:"Identique au test opposé"}, 
    {nom:"Attribut + Compétence", text:"Attribut et compétence peuvent être associé: \nPersuasion & Puissance, Baratin & Prestance,\n Arme à Feu & Agilité, Corps à corps & Corpulence,\n Langue & Connaissance, Chimie & Intuition."}, 
    {nom:"Faire plusieurs choses", text:"Faire plusieurs choses: il y a deux manières d'opérer:\n1/ Par test combiné: prendre le jet par palier et tenter d'être en dessous des deux.\n2/ Par test simultané: -10% à l'action principale, -20% à la seconde action."}, 
    {nom:"Aide", text:"Aide: +10% par personnage (Pour Caractéristique +1 si le perso à moins de 10, +2 s'il à plus de 10."}, 
    {nom:"Chance", text:"Donner un pourcentage qui se joue au d100."}, 
    {nom:"Complet // moitié // quart", text:"L'échelle temporelle des compétence:\nLa durée:\nImmédiate: seconde à minute  //  Rapide: minutes à heure  //  Longue: Heures à jour  //  Très Longue: jour à semaine  //  Interminable: semaines à mois.\n Le laps de temps:\nSimple: la durée est réduite au quart  //  Complexe: la durée est réduite de moitié  //  Très complexe: nécessite toute la durée."}, 
    {nom:"Se dépêcher", text:"Se dépêcher: \n-10% pour réduire le laps de temps de moitié. \n-20% pour réduire le laps de temps au quart."}, 
    {nom:"Urgence", text:"Situation d'urgence:\nDurée réduite d'un cran: Réussite Spéciale\nDurée réduite de deux crans: Réussite Critique"}, 
    {nom:"Prendre temps", text:"+20% au test contre une durée augmentée d'un cran"}, 
    {nom:"Degré de maitrise", text: "Amateur: 25% et + //  Professionnel: 50% et +  //  Expert: 75% et +"}, 
    {nom:"Test prolongé", text:"Test Prolongée:\nDéfinir durée et laps de temps puis nombre de réussites nécessaires (entre 2 et 5 succès).\nEnsuite, selon les jets:\nRéussite critique: action terminée\nRéussite spéciale: compte pour deux succès\nÉchec: allonge la durée d'une unité\nMaladresse: il faut recommencer depuis le début"}, 
    {nom:"Prêt à tirer", text:"Initiative +10"}, 
    {nom:"Les deux sont surpris", text:"Surprise\nPlusieurs cas de figure\n1/ Les deux sont conscients, pas de surprise\n2/ Les deux sont surpris, test opposé de Vigilance, le perdant est surpris.\n3/ Lors d'une embuscade, test opposé de Discrétion vs Vigilance\n\nIl existe deux niveaux de surprise: \n1/ Être surpris: une phase perdue\n2/ Être pris au dépourvu:  round perdu. Réussite spéciale et critique = pas de surprise  //  Réussite normale = seulement surpris"}, 
    {nom:"Surpris", text:"Surprise\nPlusieurs cas de figure\n1/ Les deux sont conscients, pas de surprise\n2/ Les deux sont surpris, test opposé de Vigilance, le perdant est surpris.\n3/ Lors d'une embuscade, test opposé de Discrétion vs Vigilance\n \nIl existe deux niveaux de surprise: \n1/ Être surpris: une phase perdue\n2/ Être pris au dépourvu:  round perdu. Réussite spéciale et critique = pas de surprise  //  Réussite normale = seulement surpris"}, 
    {nom:"Dépourvu", text:"Surprise\nPlusieurs cas de figure\n1/ Les deux sont conscients, pas de surprise\n2/ Les deux sont surpris, test opposé de Vigilance, le perdant est surpris.\n3/ Lors d'une embuscade, test opposé de Discrétion vs Vigilance\n\nIl existe deux niveaux de surprise: \n1/ Être surpris: une phase perdue\n2/ Être pris au dépourvu:  round perdu. Réussite spéciale et critique = pas de surprise  //  Réussite normale = seulement surpris"}, 
    {nom:"Ciblé", text:"Cibler\nTorse: test -10%\nMembre: test -20%\nPoint spécifique: réussite spéciale"}, 
    {nom:"A deux armes", text:"Pour une action il peut attaquer avec les deux armes -10% au test pour la principale, -20% pour la secondaire"}, 
    {nom:"Plusieurs cibles", text:"Pas de pénalité à la première cible mais si la deuxième est plus éloignée de 2m au corps à corps et 5m à distance elle subit un malus de -20%"}, 
    {nom:"Charge", text:"Charge\nDéfense impossible\n Faire au moins 5m de déplacement\nTest +10%\nDégâts +2\n Si attaque réussit: test en opposition Puissance vs Corpulence (voir**)\n\n**  Assaillant remporte le test: cible à terre, avec réussite spéciale, elle perd 1d3 PV\nLe défenseur remporte le test: ne perd pas l'équilibre, réussite spéciale: fait chuter l'assaillant"}, 
    {nom:"Coups furieux", text:"Dégats maximisés, mais défense et autres actions impossible, il faut juste attaquer"},
    {nom:"Esquive Totale", text:"Rester en défense tout le round, +20% au test. Il ne peut pas changer d'intention. A la fin il se retrouve à courte distance de l'ennemi"},
    {nom:"Armure", text:"Protection reduits d'autant les dégâts, attention au score de « gêne »"},
    {nom:"Courir", text:"Distance 5m = 2 phase d'action  //  10m (courir) = 1 phase d'action  //  20m (sprinter) = action impossible"},
    {nom:"Ramper", text:"2m / Round, avec tout les avantages et désavantages du sol"},
    {nom:"Se Relever", text:"Nécessite une action sauf si test d'Athlétisme réussi"},
    {nom:"Cible à Terre", text:"-20% au text si l'attaquant tir, +20% au test si l'attaquant frappe en mêlée"},
    {nom:"Dégainer/Rengainer", text:"Dégainer = 1phase  //  Rengainer = 2 phases"},
    {nom:"Recharger", text:"Arme automatique et une balle dans un revolver ou un fusil = 1 phase  //  Barillet d'un revolver, carabine balle par balle, arc = 2 phases  //  vieux mousquet ou tromblon, arbalète = 2 rounds"},
    {nom:"Distraire", text:"Jet quelconque en opposition à volonté. Reu Normale:-10% à prochaine action    Reu spé -20%    Reu cri fait perdre la prochaine action"},
    {nom:"Arme Improvisée", text:"Voir le tableau de l'écran.   Ressemble à une arme = -10%     Ne ressemble pas à une arme = -20%"},
    {nom:"Plusieurs Adversaires", text:"Le joueur peut utiliser une phase en action simultanée pour bloquer deux attaques (-10%, -20%) . Au delà, le blocage est impossible, se reporter à l'esquive totale"},
    {nom:"Assommer", text:"-20% de malus pour ciblage tête, Réussite normale = dégâts minimisés, Réussite spé = dégâts divisé par 2, assommé, Réussite critique = dégâts minimisé, assommé"},
    {nom:"Empoignade", text:"Test de corps à corps => test d'opposition (gratuit) s'il echoue l'adversaire se libère Strangulation immobilisation projetction désarmemetn torsion"},
    {nom:"Art Martiaux", text:"Test combiné (sous le corps et sous la compétence d'art martiaux. Coup violent: dgt doublés, coup douloureux: douleur vive(aigue sur spé), manœuvre de lutte: n'a pas à réussir un jet d'opposition pour la placer"},
    {nom:"Lancer", text:"Utiliser armes blanche, Objet de TAI inférieur ou égale à 3 = portée proche  //  TAI inférieure à FOR/2 = portée courte, test d'athlétisme pour cible précise, impact / 2 pour les dégâts"},
    {nom:"Cible en Mouvement", text:"-10% pour course  //  -20% pour sprint"},
    {nom:"Tir à bout portant", text:"Cible située à moins de 2m, utiliser la compétence Corps à Corps"},
    {nom:"Tir en Aveugle", text:"test d'Ecouter réussi pour parvenir à toucher sur une réussite spéciale, sinon, il faut une réussite critique"},
    {nom:"Tir Ajusté", text:"Défense impossible, il ne faut pas subir de dommage, +10% pour une phase, +20% pour deux phases"},
    {nom:"Tir de Barrage", text:"Uniquement avec arme semi-automatique/automatique, soit l'ennemi se met à couvert et subit des -20% à ses attaques, soit il ignore mais subit une attaque +20%."},
    {nom:"Tir de Couverture", text:"Consiste à protéger un allié. Uniquement avec arme semi-automatique/automatique, soit l'ennemi se met à couvert et subit des -20% à ses attaques, soit il ignore mais subit une attaque +20%."},
    {nom:"Tir Rapide", text:"Action prolongée (2 phases) défense impossible nbre d'attaque égal à la cadence (! sur la même cible)"},
    {nom:"Tir Nourri", text:"Uniquement avec arme automatique, attaque sur zone de 5 x 5m , jet d'Athlétisme pour les cibles, réussite normale ½ dégâts, réussite spé: évite"},
    {nom:"Enrayement d'arme", text:"Nécessite en combat un round et une réussite spéciale avec la compétence. Utiliser une arme jugée « vétuste » entraîne un enrayement sur un simple échec et une destruction sur une maladresse"}
    //{nom:"", text:""},
];

var pointderegles = document.getElementById('pointderegle');
var help = document.getElementById('help');

function pdr() {
    var num = Math.floor((Math.random() * ptsdre.length - 1));
    pointderegles.innerHTML = ptsdre[num]["nom"];
    help.innerText = ptsdre[num]["text"];      /*--- Attention, pas TextContent, car ne prend pas en compte l'espace par \n */
}

livre.addEventListener('click', () => help.classList.toggle('invisible'));


/*----------------FICHE DE CREATURES---------------------------*/

var bouton7 = document.getElementById('b7');
var bestiaire = document.getElementById('bestiaire');

bestiaire.addEventListener('click', function() {
    bestiaire.classList.toggle('monstre');
})

const monst = ["Byakhee.jpg", "Chasseur_Spectral.jpg", "Goule.jpg","Insecte_de_Shaggaï.jpg", "Mi-Go.jpg", "Momie.jpg", "Peuple_Serpent.jpg", "Profond.jpg", "Terreur_au_delà.jpg", "Vagabond_Dimensionnel.jpg", "Ver_qui_marche.jpg", "Zombie.jpg"];

bouton7.addEventListener('click', function() {
    var num = Math.floor(Math.random() * monst.length);
    bestiaire.style.backgroundImage = "url(img/monstres/" + monst[num] + ")"; 
})

/*----------------REGLES PASSIVES---------------------------*/
const regpassive = [
    {
        nom:"Blessure majeure", 
        l1:"Blessure supérieur au seuil:" ,
        l2: "1/ Inconscience: test de CON" ,
        l3: "2/ Hémorragie: Pvx10min de vie",
        l4: "3/ Sequelle voir p96"
    },
    {
        nom:"Mort subite", 
        l1:"Si dégât supérieur à CON"
    },
    {
        nom:"Récupération", 
        l1:"Horreur Lovecraftienne +1PX",
        l2:"Investigation occulte +2PX", 
        l3:"Aventure Pulp +4PV",
        l4:"...par semaine, par blessure"
    },
    {
        nom:"1er Soins", 
        l1:"Soins de base: désinfection bandage un jet pour chaque blessure, Réussite normale: +1PV  //  Réussite spéciale: +2PV  //  Réussite critique: +1d3+1PV  //  Maladresse: fera perdre 1d3+1",
        l2:"Diagnostique: Permet de connaître temps qu'il reste à vivre (Hémorragie) et degré d'avancement (maladie, poison)",
        l3:"Ralentir une hémorragie: Réussite norm: +1d6min, réussite spé: +6min, réussite critique: hémorragie stoppée, maladresse -1d6min de vie",
        l4:"Réanimation: réveille de l'inconscience",
        l5:"Apaiser la douleur: Aiguë => Vive => insignifiante"
    },
    {
        nom:"Médecine", 
        l1:"Suivi des soins: pour 1h/jours pendant une semaine: Réussite normale: 1D3PV  //  Réussite spé et cri: 2D3PV  //  Maladresse: -1D3PV",
        l2:"Soins des hémorragies: Réussite norm = hémorragie ok pas d'effort pendant DGT en heures  //  Réussite spéciale = pas de sport pendant DGT en heures  // Critique = guéri", 
        l3:"Diagnostic: Si réussit confère un bonus au jet de CON du patient: réussite normale: +10%, spéciale et critique +20%",
        l4:"Opération chirurgicale d'urgence: Réussite normale: malus de séquelle -10%  //   spéciale et critique: pas de séquelle",
        l5:"Opération chirurgicale complexe: test prolongée autant de succès nécessaire que de points sur la blessure, 30min/PV (peut soigner les pertes de d'APP)",
    },
    {
        nom:"Conditions soins", 
        l1:"Insalubre: -20%",
        l2:"Douteux: -10%",
        l3:"Normal: 0%",
        l4:"Supérieure: +10%",
        l5:"Excellentes: +20%",
    },
    {
        nom:"Douleur", 
        l1:"Les douleurs brusques:",
        l2:"Douleur vive: prochaine phase perdu, -10% à toutes les actions", 
        l3:"Douleur aiguë: prochaine phase perdu, -20% à toutes les actions",
        l4:"Les douleurs lancinantes:",
        l5:"Douleur sourde: -10% à toutes les actions",
        l6:"Douleur intense: -20% à toutes les actions",
        l7:"Les douleurs disparaissent avec un suivi médical"
    },
    {
        nom:"Changer le destin", 
        l1:"-1 Aplomb pour changer la qualité de réussite d'un cran d'un jet du joueur ou du maître",
    },
]

var touche = document.querySelectorAll('#regpassive div');
var table = document.querySelector('table');

touche.forEach(
    (e) => e.addEventListener('click', function() {

        if (e.textContent === "Etat de santé") {
            table.innerHTML = "";               
            table.innerHTML += "<tr><td>Etat de santé</td><td></td></tr><tr><td>PV -50%</td><td>Endolori: -10% actions, douleur vive, sprint impossible</td></tr><tr><td>PV à 25%</td><td>Courbatures -20% aux actions, douleur aiguë, course impossible</td></tr><tr><td>PV à 1</td><td>Meurtri, test END ou sombré dans l'inconscience</td></tr><tr><td>PV à 0</td><td>Agonie, CON/5 en minutes, puis, test END ou VOL pour 1d6 minutes</td></tr>";
        } else if (e.textContent === "Privations") {
            table.innerHTML = "";               
            table.innerHTML += "<tr><td>Faim</td><td>CON/4 (arrondi sup) en jours: OK, puis test d'END tous les jours, si échec -10% aux actions > -20% aux actions > réussite spéciale aux actions</td></tr><tr><td>Se Rationner</td><td>CON/2 (arrondi sup) en jours: OK, puis test d'END tous les jours, si échec -10% aux actions > -20% aux actions > réussite spéciale aux actions</td></tr><tr><td>Soif</td><td>CON en heures sans eau</td></tr><tr><td>Se Rationner</td><td> +20 au test d'END</td></tr><tr><td>Sommeil</td><td>CON en heures sans sommeil, test de VOL ou END toutes les heures sinon Fatigué > Épuisé > Inconscient</td></tr><tr><td>Se Rationner</td><td>4h sommeil / jour = CON x 2 heures sans sommeil, test de VOL et END toutes les heures  sinon Fatigué > Épuisé > Inconscient</td></tr>";
        } else if (e.textContent === "Evolution") {
            table.innerHTML = "";               
            table.innerHTML += "<tr><td>Case cochée</td><td>Cocher des cases après un jet en situation de stress ou décisive. À la fin, test d'XP (test de compétence) si échec: comp +5%, si réussite: comp +1d4%</td></tr><tr><td>Pts d'XP du mj</td><td>3 à 6 pts d'XP par scénario, +5% pour case cochée, +1d4% pour case non-cochée</td></tr><tr><td>Entraînement</td><td>chaque mois, test de VOL si réussit comp au choix +1d4% (malus possible de -10% -20% selon le contexte</td></tr><tr><td>Réussite crit</td><td>Proposé de coché la case et de l’acquérir comme nouvelle compétence</td></tr><tr><td>Augmenter un carac</td><td>3 mois, faire un test de VOL, si réussit +1</td></tr><tr><td>SAN</td><td>Si le scénario est réussit, test d'Intuition ou faire expliquer l'intrigue: si test réussit joueurs regagne ½ SANS perdue au cours de l'aventure. Si échec: regagne 1d10 SAN perdu , limité par ½ SAN perdue au cours de la partie.</td></tr><tr><td>Fin de scénario</td><td>Aplomb +0, +1 ou +2</td></tr>";
        } else if (e.textContent === "Santé mentale") {
            table.innerHTML = "";               
            table.innerHTML += "<tr><td>Perte de SAN</td><td>50% SAN: -10% aux actions sociales // 25% SAN: -20% aux actions sociales // 5pts de SAN: Plus aucun intérêt pour les autres // 0pts de SAN: Fou</td></tr><tr><td>SAN max</td><td>99 - mythe de Cthulhu</td></tr><tr><td>Test de santé</td><td>Crit: 0 perte // spé, norm: perte mineur // échec: perte majeure // Maladresse: perte maximale. Tableau des pertes de SAN p 103</td></tr><tr><td>Perte de SAN</td><td>Bénigne: - de 5pts // Mineure: + de 5pts  et choc psychologique // Majeure: 1/5e de la SAN actuelle en 1h et choc psychologique et trouble</td></tr><tr><td>Choc psychologique</td><td>Perte de SAN en rounds en état de choc psychologique, puis réussir un test de VOL pour en sortir</td></tr><tr><td>Reprendre ses esprits</td><td>Test d'Intuition: si réussit perte de SAN appliquée en niveau de trouble, si échec ½ de la perte en niveau de trouble, faits occulté dans l'esprit de l'investigateur (trouble fonctionne comme sequelle, niveau de trouble fonctionne comme virulence). Tableau des chocs psychologiques p104</td></tr>";
        } else {

            for (let i = 0; i < regpassive.length; i++) {
                if (e.textContent === regpassive[i]["nom"]) {
                    var objval = Object.values(regpassive[i]);
                    table.innerHTML = "";               
                    table.innerHTML += '<tr><td>'+ objval[0] +'</td><td>'+ objval[1] +'</td></tr>';
                    for (var j = 2; j < objval.length; j++) {
                        table.innerHTML += '<tr><td></td><td>'+ objval[j] +'</td></tr>';
                    }
                } 
            }       
        }       
    })
)



/* idée pour améliorer
- map qui marche , rechercher async + gesion aléatoire des abri
*/







