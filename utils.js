// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}

function estPair(n) {
  //verifie si un entier est par
  let isPair = n % 2 === 0 ? true : false;
  return isPair;
}

function maxDeDeux(a, b) {
  //verifie le plus grand des deux nombre;
  higher = a - b > 0 ? a : b;
  return higher
}

function convertirTemperature(c) {
  //
}

function calculerTVA(prix, taux) {
  //
}

function inverserChaine(texte) {
  //
}

function compterVoyelles(texte) {
  //
}

function estPalindrome(texte) {
  //
}

function factorielle(n) {
  //
}

function swap(var1, var2) {
  //
}
