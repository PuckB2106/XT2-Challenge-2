var todaytwee = new Date();

document.getElementById('datum').innerHTML = todaytwee.getDate() + '/' + (todaytwee.getMonth()+1);
// This Month

var maanden = new Array('Januari', 'Debruari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

document.getElementById('datum').innerHTML = todaytwee.getDate() + ' ' + maanden[todaytwee.getMonth()] + ' ' + todaytwee.getFullYear();

var today = new Date();

function startTime(){
//tijd opzoeken
  today = new Date();

  var seconds = addLeadingZero(today.getSeconds());
  var minutes = addLeadingZero(today.getMinutes());

  document.getElementById('klok').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;

  var t = setTimeout(startTime,500);
}
