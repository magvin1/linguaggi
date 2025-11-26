// commento singolo linea
/* commento multilinea*/
/*
console.log("Ciao, mondo!");
// Indica di logghare un messaggio nella console del browser Ciao Mondo
window.alert("Benvenuto!");
// Pop up di conferma di benvenuto all'utente
console.log(window.confirm("Sei sicuro di voler continuare?"));
// Pop up di conferma con due opzioni OK e Annulla
// Aggiungegndo console.log prima di window.confirm possiamo vedere il valore booleano restituito dalla conferma
window.prompt("Confermi?");
// Pop up con campo di input per l'utente
*/

var stringa1 = "Ciao, mondo!";
//dichiarazione di una variabile
//in php la visibilità della variabile è limitata allo scope in cui viene dichiarata
//in js la visibilità della variabile dipende dalla parola chiave usata per dichiararla
//var variabile globale 
let stringa2 = "Ciao, mondo!";
//let variabile limitata allo scope in cui viene dichiarata
const costante = "Ciao, mondo!";
//const variabile costante limitata allo scope in cui viene dichiarata
/*
costante="Ciao!";
//errore di assegnazione a una costante
*/

var stringa="Insieme di caratteri";
console.log(stringa[2]);
//stampa il carattere alla posizione 2 della stringa (parte da 0)

var intero= 1;
//interi ->int
console.log(typeof intero);
var decimale= 1.5;
//decimali -> float
console.log(typeof decimale);
// entrambi i tipi numerici in js sono di tipo number
var booleano= true;
//booleani -> true o false
console.log(typeof booleano);
// booleani in js sono di tipo boolean

var array= ["elemento1", "elemento2", "elemento3"];
//array -> collezione di elementi
console.log(typeof array);
// in js gli array sono di tipo object]);

var object= {
    chiave1: "valore1",
    chiave2: "valore2"
};
//oggetto -> collezione di coppie chiave:valore
console.log(typeof object);
// in js gli oggetti sono di tipo object


var a=1;
var b=2;

console.log(a+b); //3
console.log(a-b); //-1
console.log(a*b); //2
console.log(a/b); //0.5
console.log(a%b); //1
//operatori aritmetici: + - * / %