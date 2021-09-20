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

//On initialise les valeurs
let angleSeconde = (second * 6) % 360; //(360/60 pour avoir la valeur d'angle d'une seconde)
let angleMinute = (minute * 6 + second * 0.1) % 360; //360/60/60 pour avoir la valeur d'angle d'une minute
let angleHour = (hour * 30 + (minute / 60) * 30) % 360; //360/60/60/60 pour avoir la valeur d'angle d'une heure
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
