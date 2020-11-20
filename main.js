var parola = prompt('inserisci una parola');
var inizio = 0;
var fine = parola.length - 1;
var controllo = true;







for (var i = 0; i < parola.length; i++) {
  if(parola[inizio] !== parola[fine]){
    controllo = false;
  }
  console.log(controllo);
  inizio++;
  fine--;
}












if (controllo){
  console.log('la parola è palindroma !');
}else{
  console.log('la parola non è palindroma');
}
