// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
const currentHour = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables
let hour = currentHour.getHours() * 3600;
let minute = currentHour.getMinutes() * 60;
let second = currentHour.getSeconds();
console.log(hour, minute, second);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

//On initialise les valeurs
let angleSeconde = (second * 6) % 360; //(360/60 pour avoir la valeur d'angle d'une seconde)
let angleMinute = ((minute + second) * 0.1) % 360; //360/60/60 pour avoir la valeur d'angle d'une minute
// let angleHour = (hour * 30 + (minute / 60) * 30) % 360; //360/60/60/60 pour avoir la valeur d'angle d'une heure
let angleHour = ((hour + minute + second) * 0.0083) % 360; //360/60/60/60 pour avoir la valeur d'angle d'une heure
console.log(
  `angleHour : ${angleHour.toFixed(2)}, angleMinute : ${angleMinute.toFixed(
    2
  )}, angleSeconde : ${angleSeconde.toFixed(2)}`
);

// Déplacer les aiguilles
function demarrerLaMontre() {
  AIGUILLESEC.style.transform = `rotate(${angleSeconde}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${angleMinute}deg)`;
  AIGUILLEHR.style.transform = `rotate(${angleHour}deg)`;
  angleSeconde += 6;
  angleMinute += 0.1;
  angleHour += 0.1 / 60;
  console.log(
    `angleHour : ${angleHour.toFixed(2)}°, angleMinute : ${angleMinute.toFixed(
      2
    )}°, angleSeconde : ${angleSeconde.toFixed(2)}°`
  );
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
