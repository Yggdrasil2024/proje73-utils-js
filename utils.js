// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}

const estPair = (n) => {
  //renvoye "true" si un entier est pair
  verifieType(n, "number");
  return n % 2 === 0;
};

const maxDeDeux = (a, b) => {
  //verifie le plus grand des deux nombre et on renvoie le plus grand;
  verifieType(a, "number");
  verifieType(b, "number");
  return a > b ? a : b;
};

const convertirTemperature = (c) => {
  // convertis les degrés °C en degré °F
  // suivant la formule: °F = (°C × 1,8) + 32.
  verifieType(c, "number");
  return c * 1.8 + 32;
};

const calculerTVA = (prixHT, taux) => {
  //on determine prix toutes taxes comprises
  // formule: prixTTC = PrixHT + TVA, TVA = PrixHT *
  verifieType(texte, "number");
  return prixHT * (1 * taux);
};

const inverserChaine = (texte) => {
  //fonction d'inversion de chaines

  if (typeof texte !== "string") {
    return "veuiller rentrer une chaine de caractaire";
  }

  return texte.split("").reverse().join("");
};

const compterVoyelles = (texte) => {
  //fonction pour compter les voyelles dans un texte
  const voyelles = "aeiouyAEIOUY";
  let nbreVoyelles = 0;

  verifieType(texte, "string");

  for (i = 0; i < texte.length(); i++) {
    //si chaque lettres du textes est une voyelle
    if (voyelles.includes(texte[i])) {
      nbreVoyelles++;
    }
  }

  return nbreVoyelles;
};

const estPalindrome = (texte) => {
  //on verifie que la chaine est indentique à son inverse
  verifieType(texte, "string");
  texte = texte.toLowerCase();
  return texte === inverserChaine(texte) ? true : false;
};

const factorielle = (n) => {
  //fonction factorielle

  //cas particulier

  verifieType(n, "number");

  if (n === 0 || n === 1) {
    return 1;
  }

  //factorielle pour les autres cas
  let factorielle = 1;
  for (i = 2; i <= n; i++) {
    factorielle *= i;
  }

  return factorielle;
};

const genereMotDePasse = (taille) => {
  const alphaChars =
    "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^&*";

  let motDePasse = "";

  verifieType(taille, "number");

  for (i = 0; i < taille; i++) {
    //on recupere un index aleatoire dans l'intervalle de 0 à taille
    index = Math.floor(Math.random * taille);
    motDePasse += alphaChars[index];
  }

  return motDePasse;
};

const verifieType = (variable, typeAttendu) => {
  //verifies si une variable est bien du type attendu
  if (typeof variable !== typeAttendu)
    return `Erreur: vous avez rentrer ${variable} un type ${typeAttendu} etait attendu`;
};

/* ===============================================
 *   partie pour les demonstrations de differentes
 *   fonctions
 *
 * ===============================================*/

