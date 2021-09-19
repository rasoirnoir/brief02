// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
const currentHour = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables
let hour = currentHour.getHours();
let minute = currentHour.getMinutes();
let second = currentHour.getSeconds();
console.log(hour, minute, second);


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {



}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);