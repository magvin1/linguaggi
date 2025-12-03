//Esercizio 1
function esercizio01(){
    let giorno=window.prompt("Inserisci il numero del giorno");//prompt restituisce una stringa
    let mese=window.prompt("Inserisci il numero del mese");//prompt restituisce una stringa
    let anno=window.prompt("Inserisci il numero dell'anno");//prompt restituisce una stringa

    //document.getElementById("es1-dataInserita").innerText= giorno + "/" + mese + "/" + anno;
    let dataFutura;

    if(anno<2025){
        document.getElementById("es1-risultato").innerText="data è precedente all'attuale";
    }
    else if(anno>2025){
        document.getElementById("es1-risultato").innerText="data successiva ad attuale";
    }
    else{ //anno==2025
        if(mese<11){
            document.getElementById("es1-risultato").innerText="data è precedente all'attuale";
        }
        else if(mese==12){
            document.getElementById("es1-risultato").innerText="data successiva ad attuale";
        }
        else{ //mese==11
            if(giorno<26){
                document.getElementById("es1-risultato").innerText="data è precedente all'attuale";
            }
            else if(giorno>26){
                document.getElementById("es1-risultato").innerText="data successiva ad attuale";
            }
            else{ //giorno==26
                document.getElementById("es1-risultato").innerText="data corrisponde ad attuale";
            }
        }
    }
}
function esercizio02() {
    let giorno = window.prompt("Inserisci il giorno:");
    let mese = window.prompt("Inserisci il mese:");
    let anno = window.prompt("Inserisci l'anno:");

    document.getElementById('es2-dataInserita').innerText = giorno + "/" + mese + "/" + anno;


    // Converto in formato data
    let data = new Date(giorno + "/" + mese + "/" + anno);
    // Giorno della settimana (da 0 a 6!!!)
    let giornoSettimana = data.getDay();

    let risultato;

    switch (giornoSettimana) {
        case 1:
            risultato = "Lunedì";
        break;
        case 2:
            risultato = "Martedì";
        break;
        case 3:
            risultato = "Mercoledì";
        break;
        case 4:
            risultato = "Giovedì";
        break;
        case 5:
            risultato = "Venerdì";
        break;
        case 6:
            risultato = "Sabato";
        break;
        case 0:
            risultato = "Domenica";
        break;
    }
    
    risultato += " " + giorno + " ";

    switch (mese) {
        case "1":
            risultato += "Gennaio";
        break;
        case "2":
            risultato += "Febbraio";
        break;
        case "3":
            risultato += "Marzo";
        break;
        case "4":
            risultato += "Aprile";
        break;
        case "5":
            risultato += "Maggio";
        break;
        case "6":
            risultato += "Giugno";
        break;
        case "7":
            risultato += "Luglio";
        break;
        case "8":
            risultato += "Agosto";
        break;
        case "9":
            risultato += "Settembre";
        break;
        case "10":
            risultato += "Ottobre";
        break;
        case "11":
            risultato += "Novembre";
        break;
        case "12":
            risultato += "Dicembre";
        break;
    }

    document.getElementById("es2-risultato").innerText = risultato;
}
