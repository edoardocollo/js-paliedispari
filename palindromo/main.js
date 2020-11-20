

// VERIFICA SE UNA PAROLA È PALINDROMA
/////////////////////////////////////////
/**
 * Verifica se una parola è palindroma.
 *
 * @param {string} x The number to raise.
 * @return {boolean} x raised to the n-th power.
 */


function palindromi (parola){
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
  return controllo;
}

var parolaUtente = prompt('inserisci una parola');
if (palindromi(parolaUtente)){
  console.log('la parola è palindroma');
}else{
  console.log('la parola non è palindroma');
}
