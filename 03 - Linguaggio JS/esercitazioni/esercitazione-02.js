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