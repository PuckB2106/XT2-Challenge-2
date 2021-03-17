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

  // functie voegt 0 toe
  function addLeadingZero(number) {
      if(number < 10){
          return '0' + number;
      }
      return number
  }
}

//variabele tellen mee
var timevar = setInterval(huidigeTijd, 1000);
