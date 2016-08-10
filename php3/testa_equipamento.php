<?php

    include "EquipamentoSonoro.php";

    $eq1 = new Equipamento\Sonoro\EquipamentoSonoro();
    $eq1->liga();
    $eq1->mono();
    $eq2 = new Equipamento\Sonoro\EquipamentoSonoro();
    $eq2->liga();
    $eq2->setVolume(8);
    $eq2->stereo();

    echo "Equipamento Sonoro 1: <br>Ligado: ".$eq1->ligado."<br>Volume: ".$eq1->volume."<br>Stereo: ".$eq1->stereo."<br><br>";
    echo "Equipamento Sonoro 2: <br>Ligado: ".$eq2->ligado."<br>Volume: ".$eq2->volume."<br>Stereo: ".$eq2->stereo;

?>
