<?php 
    // Mostra errori nel documento anche se disattivati a livello globale
    ini_set('display_errors', true);

    // Commento in linea
    /*
       Commento su più linee
    */

    /* Stringhe */
    echo "<h1 class='classe' attr=\"qui sono nella stringa\">Hello World!</h1>";
    echo '<h2 class="classe" attr=\'qui sono nella stringa\'>Tipi di Dato:</h2>';

    /* Booleani */
    // Vero -> true
    // Falso -> false

    /* Numeri */
    echo 10;
    echo "\n"; // A capo nel documento di output
    echo 1.15; 
    echo "<br/>"; // A capo nella pagina

    /* Nomi delle variabili */
    $nome_variabile; // OK
    $nomeVariabile; // OK
    $nomevariabile; // Attenzione! 

    /* Array */
    // Array anonimo, si accede ai valori usando l'indice
        $array_1 = [1, 2, 3, 4, 5];
        $array_2 = array(1, 2, 3, 4, 5);

    // Array con chiavi per accedere ai valori
    $array_3 = array(
        "nome" => "Mario",
        "cognome" => "Rossi",
        "eta"   => 21
    );

    echo $array_3; // Non posso stampare direttamente un array
    echo "<br/>";
    print_r($array_3);
    echo "<br/>";
    var_dump($array_3);

    // Verifica se Mario Rossi è maggiorenne
    if ($array_3["eta"] >= 18) {
        echo "Utente maggiorenne<br/>";
    } else {
        echo "Utente minorenne<br/>";
    }

    // Verifica se Mario Rossi ha 18 anni
    if ($array_3["eta"] == "18") {
        echo "Utente diciottenne<br/>";
    } else {
        echo "Utente non diciottenne<br/>";
    }

    // Uguaglianza stretta, controlla valore E tipo
    if ($array_3["eta"] == 21) {} // Questa condizione è VERA!
    if ($array_3["eta"] == "21") {} // Questa condizione è VERA!
    if ($array_3["eta"] === 21) {} // Questa condizione è VERA!
    if ($array_3["eta"] === "21") {} // Questa condizione è FALSA!


    /** Operatori logici
     * 
     * AND  -> and oppure &&
     * OR   -> or oppure ||
     * XOR  -> xor
     * NOT  -> !
     */
    // Stampa "Falso"
    if (true and false):    // (true && false)
        echo "Condizione vera";
    else:
        echo "Condizione falsa";
    endif;

    // Stampa "Vero"
    if (true or false):     // (true || false)
        echo "Condizione vera";
    else:
        echo "Condizione falsa";
    endif;

    $persona_1 = array(
        "nome" => "Luca",
        "cognome" => "Rossi",
        "telefono" => ""
    );
    
    $persona_2 = array(
        "nome" => "Lorenza",
        "cognome" => "Verdi"
    );

    if ($persona_1["telefono"] != ""):
        echo "Tel: ";
        echo $persona_1["telefono"];
    endif;

    // Se la prima condizione è FALSA non valuto nemmeno la seconda, dato che il risultato è comunque FALSO
    if (array_key_exists("telefono", $persona_2) && $persona_2["telefono"] != ""):
        echo "Tel: " . $persona_2["telefono"];
    endif;

    $voti = [6,7,7.5,4,9,8];
    $somma =0;
    $num_voti=0;

    for($i=0; $i<count($voti); $i++):
        if($voti[$i]>0 && $voti[$i]>0):
            $somma += $voti[$i];
            $num_voti++;
        endif;
    endfor;
    
    echo "\n";
    echo "la somma dei voti è ". $somma;
    echo "\n";
    echo "il numero di voti è ". count($voti);
    echo "\n";
    echo "il numero di voti validi è ". $num_voti;


    $media= $somma/$num_voti;
    echo "\n";
    echo "La media dei voti è ". $media ."\n";

    $numero=45;
    $valori= [1,3,6,87,23,5,45,17,89,12,34];

    $i=0;
    $trovato=false;

    while(!$trovato):
        if($valori[$i]== $numero):
            $trovato=1;
        endif;
        $i++;
    endwhile;

    $settimana = ["monday", "tuesday", "wednesday", "thrusday", "friday", "saturday", "sunday"];
    for($i=0;$i<count($settimana);$i++):
        switch($settimana[$i]): 
            case "monday":
                echo "Lunedì ";
                break;
            case "tuesday":
                echo "martedì ";
                break;
            case "wednesday":
                echo "mercoledì ";
                break;
            case "thrusday":
                echo "giovedì ";
                break;
            case "friday":
                echo "venerdì ";
                break;
            case "saturday":
                echo "sabato ";
                break;
            case "sunday":
                echo "domenica ";
                break;
        endswitch;
        echo "\n";
    endfor;
    
    /** 
     * Calcola la media aritmetica 
     * @param int[] i voti dello studente
     * @return float con la media aritmetica
     */
    function calcola_media($voti){
        $somma=0;
        for($i=0;$i<count($voti);$i++):
            $somma+=$voti[$i];
        endfor;
        $media=$somma/$i;
        return $media;
    }

    $studenti =[
        array(
            "nome"=> "Mario",
            "eta" => "21",
            "voti"=> [3,7,9,5],
        )
    ];

    foreach($studenti as $studente):
        $media= calcola_media($studente["voti"]);
        echo $studente["nome"] . " ha una media di ". $media . "\n";
        if($media>=6):
            echo "promosso \n";
        else:
            echo "bocciato \n";
        endif;
       // br();
    endforeach;

    //Strigna del tipo sunday 3 August 2025
    /**
     * formatta la data da formato inglese a formato italiano
     * @param string input data in inglese
     * @return string output data italiana
     **/
    function formatta_data($data){
        $parti= explode(" ",$data);//esplode una stringa dopo avergli detto un separatore da considerare
        $giorno_della_settimana = traduci_giorno_settimana($parti[0]);
        $giorno_del_mese= traduci_mese($parti[1]);
        $mese= traduci_mese($parti[2]);
        $anno= $parti[3];
        echo "Ecco la traduzione della data ". $giorno_della_settimana. " ". $giorno_del_mese . " ". $mese. " ". $anno;
    }
    function traduci_giorno_settimana($giorno){
         switch(strtolower($giorno[$i])): 
            case "monday":
                return "Lunedì ";
            case "tuesday":
                return "martedì ";
            case "wednesday":
                return "mercoledì ";
            case "thrusday":
                return "giovedì ";
            case "friday":
                return "venerdì ";
            case "saturday":
                return "sabato ";
            case "sunday":
                return "domenica ";
                default:
                return false;
        endswitch;
        }
        function traduci_mese($mese){
         switch(strtolower($mese[$i])): 
            case "january":
                return "gennaio ";
            case "february":
                return "febbraio ";
            case "march":
                return "Marzo ";
            case "april":
                return "Aprile ";
            case "may":
                return "Maggio ";
            case "june":
                return "Giugno ";
            case "july":
                return "Luglio ";
            case "august":
                return "Agosto ";
            case "september":
                return "Settembre ";
            case "october":
                return "Ottobre ";
            case "november":
                return "Novembre ";
            case "december":
                return "Dicembre ";
            default:
                return false;
        endswitch;
        }
?>