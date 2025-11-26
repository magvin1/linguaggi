<div>
    <h2> Esercizio 1</h2>
 
<?php
    /*Esercizio 1
    * Dato un insieme di valori, trovare il numero più alto
    */

    $valori= [1,3,5,2,5,3,9,4,7];
    $valori_MAX = $valori[0];

    for($i=1; $i < count($valori);$i++):
        if($valori_MAX<$valori[$i]):
            $valori_MAX=$valori[$i];
        endif;
    endfor;

    echo "il maggiore tra i valori nell'array è ". "<strong>". $valori_MAX . "</strong>";
    echo "\n";
?>
   <p> il valore maggiore è:<strong> <?php echo $valori_MAX; ?></strong>
    </p>
</div>
<div>
    <h2> Esercizio 2</h2>
</div>
<?php
    /** Esercizio 2
     * stampa tutti gli elementi, finchè l'elemento corrente è
     * inferiore a 15
     */

    $valori2 = [12,13,5,12,15,3,19,4,17];

    for($i=0; $valori2[$i]<15 && $i< count($valori2);$i++):
        echo "elemento stampato ". $valori2[$i];
        echo "\n";
    endfor;
    echo "\n";
?>
    <div>
        <h2> Esercizio 3</h2>
    </div>
<?php
    /**
     * Esercizio 3 Output dei nomi dei maggiorenni e media di età di tutti
     */
    $persone = [
        array(
            "nome"=>"Mario",
            "eta" => 19,
        ),
        array(
            "nome"=>"Lucia",
            "eta" => 14,
        ),
        array(
            "nome"=>"Rosa",
            "eta" => 21,
        ),
        array(
            "nome"=>"Francesco",
            "eta" => 24,
        ),
        array(
            "nome"=>"Giuseppe",
            "eta" => 16,
        ),
        array(
            "nome"=>"Marta",
            "eta" => 22,
        ),
    ];


    for($i=0; $i<count($persone);$i++):
        if($persone[$i]["eta"]>=18):
            echo "". $persone[$i]["nome"]. " è maggiorenne \n<br>";
        endif;
    endfor;
    $media_eta=$persone[0]["eta"];
    for ($i=1; $i<count($persone);$i++):
        $media_eta+=$persone[$i]["eta"];
    endfor;
    echo "la media di età è ". $media_eta/$i . "\n<br>";
    echo "la media di età è ". $media_eta/count($persone). "\n<br>";
    ?>
    <div>
        <h2> Esercizio 4</h2>
    </div>
<?php
    /**
     *  Esercizio 4
     * Data l'età di una persona, ritorna se può guidare il 125
    */

    /**
     * Funzione per verificare se un cittadino può guidare un 125
     * @param int età da verificare
     * @return boolean 1 è vero può guidare, 0 è false
     */

    function puo_guidare_125($eta){
        $eta_guida_125=16;
        if($eta>$eta_guida_125):
            return true;
        endif;
        return false;
    }

    $eta=14;
    if(puo_guidare_125($eta)):
        echo "può guidare il 125 \n<br>";
    else:
        echo "non può guidare il 125 \n<br>";
    endif;
    ?>
    <div>
        <h2> Esercizio 5</h2>
    </div>
<?php
    /**
     *  Esercizio 5
     * Dato un numero verifica se divisibile per 3
    */
    Function divisibile_3($numero){
        if($numero%3==0):
            return true;
        endif;
        return false;
    }
    ?>
    <div>
        <h2> Esercizio 6</h2>
    </div>
<?php
    /**
     *  Esercizio 6
     * Dato un numero, ritornarlo in formato euro (€ 10.00)
    */

    Function in_euro($saldo){
        return "€ ". number_format($saldo, 2, ".","") ;
    }
?>