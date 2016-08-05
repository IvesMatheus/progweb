<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>PHP1</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Este é um grande cabeçalho</h1>
        <h3>E este aqui é um pequeno cabeçalho</h3>
        <p>Aqui eu coloquei um parágrafo com algum texto aleatório, e a seguir vou inserir um formulário dentro de uma tabela. Além disso aqui vai um link <a href="http://icomp.ufam.edu.br/daivd">http://icomp.ufam.edu.br/daivd</a>
        <form method="get" action="show.php" name="form1">
            <dl>
                <dt>Seu nome</dt>
                <dd>
                    <?= $_GET["nome"] ?>
                </dd>
                <dt>Seu sexo</dt>
                <dd>
                    <?= $_GET["sexo"] ?>
                </dd>
                <dt>Seus comentário</dt>
                <dd>
                    <p><?= $_GET["comentario"] ?></p>
                </dd>
            </dl>
        </form>
    </body>
</html>
