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
    echo "\n";
?>
<div>
    <h2> Esercizio 1</h2>
    <p> il valore maggiore è:</strong> <?php echo $valori_MAX; ?>
    </p>
</div>
<?php
    /** Esercizio 2
     * stampa tutti gli elementi, finchè l'elemento corrente è
     * inferiore a 15
     */

    $valori2 = [12,13,5,12,15,3,19,4,17];

    for($i=0; $valori2[$i]<15;$i++):
        echo "elemento stampato ". $valori2;
        echo "\n";
    endfor;
    echo "\n";
?>