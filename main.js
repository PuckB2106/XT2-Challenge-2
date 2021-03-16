var today = new Date();

document.getElementById('datum').innerHTML = today.getDate() + '/' + (today.getMonth()+1);
// This Month

var maanden = new Array('Januari', 'Debruari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();
