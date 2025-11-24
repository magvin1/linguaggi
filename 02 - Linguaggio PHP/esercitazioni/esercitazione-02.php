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

    echo "il maggiore tra i valori nell'array è ". $valori_MAX;
?>