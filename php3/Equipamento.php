<?php
    namespace Equipamento\Sonoro;

    class Equipamento
    {
        public $ligado;

        public function liga()
        {
            $this->ligado = true;
        }

        public function desliga()
        {
            $this->ligado = false;
        }
    }
?>
