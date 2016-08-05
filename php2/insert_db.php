<?php

    $nome = $_GET["nome"];
    $sexo = $_GET["sexo"];
    $comentario = $_GET["comentario"];

    $usuario = "gomoku";
    $senha = "gomoku123";

    try
    {
        $con  = new PDO("mysql:host=localhost;dbname=gomoku", $usuario, $senha);
        $con->exec("set names utf8");
        $stm = $con->prepare('INSERT INTO comentario(nome, sexo, comentarios) VALUES(:nome, :sexo, :comentario)');
        $stm->bindValue(":nome", $nome);
        $stm->bindValue(":sexo", $sexo);
        $stm->bindValue(":comentario", $comentario);
        $stm->execute();

        echo = "Comentario adicionado com sucesso";
    }
    catch(PDOException $e)
    {
        echo $e->getMessage();
    }

?>
