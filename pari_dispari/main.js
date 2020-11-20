// Pari e Dispari
//////////////////



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariODispari = prompt('scegli pari o dispari');
var numeroUtente = Number(prompt('scegli un numero da 1 a 5'));
console.log(pariODispari, numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).



/**
 * Genera numero random.
 *
 * @return {number} numero random.
 */

function random (){

  var numero = Math.floor(Math.random() * 5  ) + 1 ;
  return numero;
}
var numeroPc = random();
console.log(numeroPc);

// Sommiamo i due numeri

var somma = numeroUtente + numeroPc;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)



/**
 * Verifica se un numero è pari.
 *
 * @param {number}  numero da verificare.
 * @return {boolean}
 */

function verificaPariDispari(numero){
  var verifica = true;
  if (numero % 2 !== 0){
    verifica = false;
  }
  return verifica;
}
console.log(verificaPariDispari(somma));
// Dichiariamo chi ha vinto.

if (verificaPariDispari(somma)) {
  console.log('hai vinto');
}else{
  console.log('hai perso');
}
