<?php
    namespace Equipamento\Sonoro;
    include "Equipamento.php";

    class EquipamentoSonoro extends Equipamento
    {
        public $volume;
        public $stereo;

        public function mono()
        {
            $this->stereo = false;
        }

        public function stereo()
        {
            $this->stereo = true;
        }

        public function setVolume($volume)
        {
            $this->volume = $volume;
        }

        public function liga()
        {
            parent::liga();
            $this->setVolume(5);
        }
    }
?>
