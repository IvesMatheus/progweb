gomoku = new Array();

for(i = 0; i < 15; i++)
{
    gomoku[i] = new Array();

    for(j = 0 ; j < 15; j++)
        gomoku[i][j] = -1;
}

new_game = document.getElementById("new_game");
new_game.onclick = function ()
{
    window.location.reload();
}

matriz_gomoku = document.getElementById("matriz_gomoku");

for(i = 14; i >= 0; i--)
{
    for(j = 14; j >= 0; j--)
    {
        btn = "<input id=\"peca" + i + "_" + j + "\" type=\"button\" class=\"peca\" />";
        matriz_gomoku.insertAdjacentHTML('afterbegin', btn);
        peca = document.getElementById("peca" + i + "_" + j);
        peca.style.setProperty("background-color", "black");

        peca.onclick = function ()
        {
            var aux = this.id.substring(4);
            var indices = aux.split("_");

            gomoku[indices[0]][indices[1]] = jogador;
            this.style.removeProperty("background-color");
            if(jogador == 0)
                this.style.setProperty("background-image", "url(_imgs/o_branco.png)");
            else
                this.style.setProperty("background-image", "url(_imgs/o_preto.jpg)");
            this.style.setProperty("background-size", "contain");
            this.disabled = true;

            check = verifica_vencedor();
            if(check == -1)
                prox_jogador();
            else if(check == 0)
            {
                window.alert("Jogador 1 venceu");
                window.location.reload();
            }
            else
            {
                window.alert("Jogador 2 venceu");
                window.location.reload();
            }
        }
    }

    //matriz_gomoku.insertAdjacentHTML('afterbegin', br);
}

jogador = 0;

function prox_jogador()
{
    if(jogador == 0)
        jogador++;
    else
        jogador--;
}

function verifica_vencedor()
{
    for(i = 0; i < 15; i++)
    {
        for(j = 0; j < 11; j++)
        {
            if((gomoku[i][j] == 0)
            && (gomoku[i][j + 1] == 0)
            && (gomoku[i][j + 2] == 0)
            && (gomoku[i][j + 3] == 0)
            && (gomoku[i][j + 4] == 0))
                return 0;
            else if((gomoku[i][j] == 1)
            && (gomoku[i][j + 1] == 1)
            && (gomoku[i][j + 2] == 1)
            && (gomoku[i][j + 3] == 1)
            && (gomoku[i][j + 4] == 1))
                return 1;

            if((gomoku[j][i] == 0)
            && (gomoku[j + 1][i] == 0)
            && (gomoku[j + 2][i] == 0)
            && (gomoku[j + 3][i] == 0)
            && (gomoku[j + 4][i] == 0))
                return 0;
            else if((gomoku[j][i] == 1)
            && (gomoku[j + 1][i] == 1)
            && (gomoku[j + 2][i] == 1)
            && (gomoku[j + 3][i] == 1)
            && (gomoku[j + 4][i] == 1))
                return 1;
        }
    }

    for(i = 0; i < 11; i++)
    {
        for(j = 0; j < 11; j++)
        {
            if((gomoku[i][j] == 0)
            && (gomoku[i + 1][j + 1] == 0)
            && (gomoku[i + 2][j + 2] == 0)
            && (gomoku[i + 3][j + 3] == 0)
            && (gomoku[i + 4][j + 4] == 0))
                return 0;

            else if((gomoku[i][j] == 1)
            && (gomoku[i + 1][j + 1] == 1)
            && (gomoku[i + 2][j + 2] == 1)
            && (gomoku[i + 3][j + 3] == 1)
            && (gomoku[i + 4][j + 4] == 1))
                return 1;
        }
    }

    for(i = 0; i < 11; i++)
    {
        for(j = 4; j < 15; j++)
        {
            if((gomoku[i][j] == 0)
            && (gomoku[i + 1][j - 1] == 0)
            && (gomoku[i + 2][j - 2] == 0)
            && (gomoku[i + 3][j - 3] == 0)
            && (gomoku[i + 4][j - 4] == 0))
                return 0;

            else if((gomoku[i][j] == 1)
            && (gomoku[i + 1][j - 1] == 1)
            && (gomoku[i + 2][j - 2] == 1)
            && (gomoku[i + 3][j - 3] == 1)
            && (gomoku[i + 4][j - 4] == 1))
                return 1;
        }
    }

    return -1;
}
