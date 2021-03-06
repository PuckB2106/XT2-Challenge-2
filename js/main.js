var today = new Date();

var maandenVanHetJaar = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

// dit geeft de dag, maand en het jaar weer
document.getElementById('tijdA').innerHTML = today.getDate()  + ' ' +  maandenVanHetJaar[today.getMonth()] + ' ' +  today.getFullYear();;

//functie waarmee de huidige tijd wordt weergegeven in uren, minuten en seconden
function huidigeTijd(){
  var today = new Date();

  var seconds = addLeadingZero(today.getSeconds());
  var minutes = addLeadingZero(today.getMinutes());

  document.getElementById('tijdL').innerHTML = today.getHours() + ':' +  minutes +  ':' + seconds ;

  // functie voegt 0 toe aan het getal
  function addLeadingZero(number) {
      if(number < 10){
          return '0' + number;
      }
      return number
  }
}

//variabele tellen mee
var timevar = setInterval(huidigeTijd, 1000);

// function myFunction() {
//   var today = new Date();
//
// var dagenVanDeWeek = new Array('maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag');
//
// var n = dagenVanDeWeek[today.getday()];
// document.getElementById('tijdNY').innerHTML = n;
// }

var dagenVanDeWeek = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
// geeft dagen van de week weer
document.getElementById('tijdNY').innerHTML =  dagenVanDeWeek[today.getDay()];

// zorgt voor het veranderen van de afbeelding in een zon of maan
var tijdNu = new Date();
var dagEnNacht = tijdNu.getHours();

if (dagEnNacht > 6 && dagEnNacht <= 18) {
  document.getElementById("afb").src = "styles/zon.png";
} else {
  document.getElementById("afb").src = "styles/moon_PNG36.png";
}

// zorgt ervoor dat de achtergrondkleur veranderd
var t = new Date().getHours();
if (t > 6 && t < 18) {
    document.body.style.backgroundColor="#357DED";
} else if (t > 18 && t < 6) {
    document.body.style.backgroundColor="#1F2833";
} else {
    document.body.style.backgroundColor="#1F2833";
}
