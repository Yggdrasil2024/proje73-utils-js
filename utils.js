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

console.log(estPair(4));
console.log(estPair(7));
console.log(estPair(0));

console.log(maxDeDeux(10, 5));
console.log(maxDeDeux(-3, 8));
console.log(maxDeDeux(4, 4));

console.log(convertirTemperature(0));
console.log(convertirTemperature(25));
console.log(convertirTemperature(-10));

console.log(calculerTVA(100, 0.2));
console.log(calculerTVA(50, 0.055));
console.log(calculerTVA(200, 0));

console.log(inverserChaine("bonjour"));
console.log(inverserChaine("javascript"));
console.log(inverserChaine(123));

console.log(compterVoyelles("hello"));
console.log(compterVoyelles("akieni"));
console.log(compterVoyelles("str"));

console.log(estPalindrome("kayak"));
console.log(estPalindrome("hello"));
console.log(estPalindrome("Radar"));

console.log(factorielle(5));
console.log(factorielle(0));
console.log(factorielle(1));

console.log(genereMotDePasse(8));
console.log(genereMotDePasse(12));
console.log(genereMotDePasse(16));

console.log(verifieType("texte", "string"));
console.log(verifieType(42, "number"));
console.log(verifieType("texte", "number"));
