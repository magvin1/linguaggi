// commento singolo linea
/* commento multilinea*/
/*
console.log("Ciao, mondo!");// Indica di logghare un messaggio nella console del browser Ciao Mondo
window.alert("Benvenuto!");// Pop up di conferma di benvenuto all'utente
console.log(window.confirm("Sei sicuro di voler continuare?"));// Pop up di conferma con due opzioni OK e Annulla
// Aggiungegndo console.log prima di window.confirm possiamo vedere il valore booleano restituito dalla conferma
window.prompt("Confermi?");// Pop up con campo di input per l'utente
*/

var stringa1 = "Ciao, mondo!";//dichiarazione di una variabile
//in php la visibilità della variabile è limitata allo scope in cui viene dichiarata
//in js la visibilità della variabile dipende dalla parola chiave usata per dichiararla
//var variabile globale 
let stringa2 = "Ciao, mondo!";//let variabile limitata allo scope in cui viene dichiarata
const costante = "Ciao, mondo!";//const variabile costante limitata allo scope in cui viene dichiarata
/*
costante="Ciao!";
//errore di assegnazione a una costante
*/

var stringa="Insieme di caratteri";
console.log(stringa[2]);//stampa il carattere alla posizione 2 della stringa (parte da 0)

var intero= 1;//interi ->int
console.log(typeof intero);
var decimale= 1.5;//decimali -> float
console.log(typeof decimale);// entrambi i tipi numerici in js sono di tipo number
var booleano= true;//booleani -> true o false
console.log(typeof booleano);// booleani in js sono di tipo boolean

var array= ["elemento1", "elemento2", "elemento3"];//array -> collezione di elementi
console.log(typeof array);// in js gli array sono di tipo object]);

var object= {
    chiave1: "valore1",
    chiave2: "valore2"
};//oggetto -> collezione di coppie chiave:valore
console.log(typeof object);// in js gli oggetti sono di tipo object

var a=1;
var b=2;

console.log(a+b); //3
console.log(a-b); //-1
console.log(a*b); //2
console.log(a/b); //0.5
console.log(a%b); //1
//operatori aritmetici: + - * / %

a=1;
console.log(a++); //Leggo e poi incremento: leggo 1 e poi a diventa 2
console.log(++a); //Incremento e poi leggo: a=3 e poi leggo 3
console.log(a--); //Leggo e poi decremento: leggo 3 e poi a diventa 2
console.log(--a); //Decremento e poi leggo: a=1 e poi leggo 1
//operatori di incremento/decremento: ++ --

//a=1;b=2;
console.log(a+=b); //a=a+b -> 1+2=3
console.log(a-=b); //a=a-b -> 3-2=1
console.log(a*=b); //a=a*b -> 1*2=2
console.log(a/=b); //a=a/b -> 2/2=1
console.log(a%=b); //a=a%b -> 1%2=1
//operatori di assegnazione: += -= *= /= %=

console.log(a<b);//true
console.log(a>b);//false
console.log(a<=b);//true   
console.log(a>=b);//false
console.log(a==b);//false
console.log(a!=b);//true
//operatori di confronto: < > <= >= == != 

console.log(!(a<b)); //false è il not a non è minore di b
console.log(a==3 && b==1); //false a è uguale a 3 e b è uguale a 1
console.log(a==3 || b==2); //true a è uguale a 3 o b è uguale a 2
//operatori logici: &&(and) ||(or) !(not)

a=3;

console.log(a==3); //true
console.log(a===3); //true
console.log(a=="3"); //true
console.log(a==="3"); //false
// in js esistono due operatori di uguaglianza: == e ===
//== confronta i valori dopo aver effettuato la conversione di tipo se necessaria
//=== confronta i valori senza effettuare la conversione di tipo

console.log(stringa1+stringa2); //Concatenazione di stringhe

a=2;
b=3;
var c="1";
var somma= a+c; //2+"1" -> "21" Somma
console.log(a+b); //2+3 -> 5 Concatenzazione
console.log(a+c); // "21"
console.log(somma+b); //"21"+3 -> "213"
console.log(somma>212);//"21">212 -> false la stringa 
console.log(somma>20);//"21">20 -> true la stringa viene convertita in numero
console.log(somma.lenght);//"21".lenght -> 2 lunghezza della stringa
console.log(somma.lenght<3);//"21".lenght<3 -> true lunghezza della stringa è 2
console.log(a+b+c);//5+"1" -> "51" viene eseguita prima la somma tra a e b e poi la concatenazione con c, quindi da sinistra a destra
// in js la somma tra numeri e stringhe può portare a risultati inaspettati a causa della conversione di tipo automatica
// è buona pratica evitare di mischiare tipi diversi in operazioni aritmetiche

var d;
console.log(d); //undefined variabile dichiarata ma non inizializzata, variabile non assume alcun valore
d=undefined;//assegnazione esplicita di undefined
var e= null;
console.log(e); //null variabile inizializzata a null (assenza di valore)

var oggetto= {
    "nullo": null,
    "undefined": undefined,
};
console.log(oggetto.nullo); //null
console.log(oggetto.undefined); //undefined
console.log(oggetto);//{nullo: null, undefined: undefined} mostra tutte variabili dell'oggetto
console.log(d==true); //false undefined non è uguale a true
console.log(e==false); //false null non è uguale a false
console.log(d==e); //true undefined è uguale a null con ==
console.log(d===e); //false undefined non è uguale a null con ===

//controlli di flusso: if else
var numero= window.prompt("Inserisci un numero:");//prompt restituisce una stringa

if(numero%2==0){
    window.alert("Il numero è pari.");
} else {
    window.alert("Il numero è dispari.");
}//controlli di flusso: if else
// obbligatorio mettere graffe se il blocco di codice contiene più di una istruzione, per standard è buona pratica metterle sempre

var mese= window.prompt("Inserisci il numero del mese (1-12):");//prompt restituisce una stringa
switch(numero){
    case "1":
        window.alert("Gennaio");
        break;
    case "2":  
        window.alert("Febbraio");
        break;
    case "3":   
        window.alert("Marzo");
        break;
    case "4":   
        window.alert("Aprile");
        break;
    case "5":   
        window.alert("Maggio");
        break;
    case "6":   
        window.alert("Giugno");
        break;
    case "7":   
        window.alert("Luglio");
        break;
    case "8":   
        window.alert("Agosto");
        break;
    case "9":   
        window.alert("Settembre");
        break;
    case "10":   
        window.alert("Ottobre");
        break;
    case "11":   
        window.alert("Novembre");
        break;
    case "12":   
        window.alert("Dicembre");
        break;
    default:
        window.alert("Mese non valido.");
        break;
}//controlli di flusso: switch case
// in js il valore del case viene confrontato con il valore della variabile senza conversione di tipo
// quindi è importante usare lo stesso tipo di dato (stringa con stringa, numero con numero)
// è buona pratica mettere sempre il break alla fine di ogni case per evitare il fall through
// il default viene eseguito se nessun case corrisponde al valore della variabile

