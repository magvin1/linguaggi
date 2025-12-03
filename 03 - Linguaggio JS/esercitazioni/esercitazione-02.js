function esercizio01_2(){
    let numeroSegreto = Math.floor(Math.random()*10)+1;
    if(numeroSegreto>10){
        numeroSegreto--;
    }
    let numeroUtente=window.prompt("Numero segreto scelto. Inizia a indovinare!");
    while(numeroUtente!=numeroSegreto){
        numeroUtente=window.prompt("Numero sbagliato. Riprova:");
    }
    document.getElementById("es1-risultato").innerText="Complimenti! Hai indovinato il numero segreto: " + numeroSegreto;
}

function fattoriale_funzione(n){    
    if(n>0){
    return fattoriale_funzione(n-1)*n;
    }
    else{
        return 1;
    }
}

function esercizio02_2(){
    let numero=window.prompt("Inserisci un numero per calcolarne il fattoriale:");
    let fattoriale;
    while(numero<0){
        window.alert("Il fattoriale non è definito per numeri negativi.");
        numero=window.prompt("Inserisci un numero valido (>=0):");
    }
    if(numero==0){
        fattoriale=1;
    }
    else
    fattoriale=fattoriale_funzione(numero);
    document.getElementById("es2-risultato").innerText="Il fattoriale di " + numero + " è " + fattoriale;
}
/*
    function esercizio02_2(){
    let numero=window.prompt("Inserisci un numero per calcolarne il fattoriale:");
    let fattoriale;
    while(numero<0){
        window.alert("Il fattoriale non è definito per numeri negativi.");
        numero=window.prompt("Inserisci un numero valido (>=0):");
    }
    if(numero==0){
        fattoriale=1;
    }
    else
    for(let i=1; i<=numero; i++){
        fattoriale*=i;
    }
    document.getElementById("es2-risultato").innerText="Il fattoriale di " + numero + " è " + fattoriale;
}
*/
function media_voti_funzione(votiArray){
    votiArray=votiArray.split(","); //converte la stringa in array
    let somma=0;
    for( let i=0; i<votiArray.length; i++)
        somma+=parseInt(votiArray[i]);
    return somma/votiArray.length;
}

function esercizio03_2(){
    let studente={
        nome: window.prompt("Inserisci il tuo nome:"),
        cognome: window.prompt("Inserisci il tuo cognome:"),
        matricola: window.prompt("Inserisci il tuo numero di matricola:"),
        votiStringa: window.prompt("Inserisci i tuoi voti separati da una virgola:"),
        media_voti: 0
    }
    studente.media_voti=media_voti_funzione(studente.votiStringa);
    for(let chiave in studente){
        if(chiave!="votiStringa")
            document.getElementById("es3-"+chiave).innerText= chiave + ": " + studente[chiave];
    }
}

/*
function esercizio03_2(){
    let studente={
        nome: "",
        cognome: "",
        matricola: "",
        voti: []],
    }

    for (chiave in studente){
        if(chiave!="voti"){
            studente[chiave]=window.prompt("Inserisci il tuo " + chiave + ":");
        }
            else{
            let votiStringa=window.prompt("Inserisci i tuoi voti separati da una virgola:");
            studente.voti=votiStringa.split(",");
        }
    }

    let mediavoti=0;
    for(voto of studente.voti){
        mediavoti+=parseInt(voto);
    }
    studente.mediavoti= mediavoti/studente.voti.length;

    let risultato;
    for(chiave in studente){
        if(chiave!="voti"){
            risultato= chiave + ": " + studente[chiave];
        }
            document.getElementById("es3-"+chiave).innerText= risultato;
    //studente.mediavoti= mediavoti_funzione(studente.voti);

*/