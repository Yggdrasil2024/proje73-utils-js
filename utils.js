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
  verifieType(prixHT, "number");
  verifieType(taux, "number");
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

  for (i = 0; i < texte.length; i++) {
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

  for (let i = 0; i < taille; i++) {
    //on recupere un index aleatoire dans l'intervalle de 0 à taille
    let index = Math.floor(Math.random() * alphaChars.length);
    motDePasse += alphaChars[index];
  }

  return motDePasse;
};

const verifieType = (variable, typeAttendu) => {
  //verifies si une variable est bien du type attendu
  if (typeof variable !== typeAttendu)
    return `Erreur: vous avez rentrer "${variable}" un type "${typeAttendu}" etait attendu`;
  else return `Valid: c'est bien une valeur de type "${typeAttendu}"`;
};

/* ===============================================
 *   partie pour les demonstrations de differentes
 *   fonctions
 *
 * ===============================================*/


afficher(`
<h3 id="estPair1">Demo estPair:</h3>
<div class="test">
  <p>estPair(4) : <span class="result">${estPair(4)}</span></p>
  <p>estPair(7) : <span class="result">${estPair(7)}</span></p>
  <p>estPair(0) : <span class="result">${estPair(0)}</span></p>
</div>

<h3 id="maxDeDeux1">Demo maxDeDeux:</h3>
<div class="test">
  <p>maxDeDeux(10, 5) : <span class="result">${maxDeDeux(10, 5)}</span></p>
  <p>maxDeDeux(-3, 8) : <span class="result">${maxDeDeux(-3, 8)}</span></p>
  <p>maxDeDeux(4, 4) : <span class="result">${maxDeDeux(4, 4)}</span></p>
</div>

<h3 id="convertirTemperature1">Demo convertirTemperature:</h3>
<div class="test">
  <p>convertirTemperature(0) : <span class="result">${convertirTemperature(0)}</span></p>
  <p>convertirTemperature(25) : <span class="result">${convertirTemperature(25)}</span></p>
  <p>convertirTemperature(-10) : <span class="result">${convertirTemperature(-10)}</span></p>
</div>

<h3 id="calculerTVA1">Demo calculerTVA:</h3>
<div class="test">
  <p>calculerTVA(100, 0.20) : <span class="result">${calculerTVA(100, 0.2)}</span></p>
  <p>calculerTVA(50, 0.055) : <span class="result">${calculerTVA(50, 0.055)}</span></p>
  <p>calculerTVA(200, 0) : <span class="result">${calculerTVA(200, 0)}</span></p>
</div>

<h3 id="inverserChaine1">Demo inverserChaine:</h3>
<div class="test">
  <p>inverserChaine("bonjour") : <span class="result">${inverserChaine("bonjour")}</span></p>
  <p>inverserChaine("javascript") : <span class="result">${inverserChaine("javascript")}</span></p>
  <p>inverserChaine(123) : <span class="result">${inverserChaine(123)}</span></p>
</div>

<h3 id="compterVoyelles1">Demo compterVoyelles:</h3>
<div class="test">
  <p>compterVoyelles("hello") : <span class="result">${compterVoyelles("hello")}</span></p>
  <p>compterVoyelles("akieni") : <span class="result">${compterVoyelles("akieni")}</span></p>
  <p>compterVoyelles("str") : <span class="result">${compterVoyelles("str")}</span></p>
</div>

<h3 id="estPalindrome1">Demo estPalindrome:</h3>
<div class="test">
  <p>estPalindrome("kayak") : <span class="result">${estPalindrome("kayak")}</span></p>
  <p>estPalindrome("hello") : <span class="result">${estPalindrome("hello")}</span></p>
  <p>estPalindrome("Radar") : <span class="result">${estPalindrome("Radar")}</span></p>
</div>

<h3 id="factorielle1">Demo factorielle:</h3>
<div class="test">
  <p>factorielle(5) : <span class="result">${factorielle(5)}</span></p>
  <p>factorielle(0) : <span class="result">${factorielle(0)}</span></p>
  <p>factorielle(1) : <span class="result">${factorielle(1)}</span></p>
</div>

<h3 id="genereMotDePasse1">Demo genereMotDePasse:</h3>
<div class="test">
  <p>genereMotDePasse(8) : <span class="result">${genereMotDePasse(8)}</span></p>
  <p>genereMotDePasse(12) : <span class="result">${genereMotDePasse(12)}</span></p>
  <p>genereMotDePasse(16) : <span class="result">${genereMotDePasse(16)}</span></p>
</div>

<h3 id="verifieType1">Demo verifieType:</h3>
<div class="test">
  <p>verifieType("texte", "string") : <span class="result">${verifieType("texte", "string")}</span></p>
  <p>verifieType(42, "number") : <span class="result">${verifieType(42, "number")}</span></p>
  <p>verifieType("texte", "number") : <span class="result">${verifieType("texte", "number")}</span></p>
</div>
`);
