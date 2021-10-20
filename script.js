
function exibirResultado(){

    const jogador1 = document.getElementById("jogador1").valueAsNumber;
    const jogador2 = document.getElementById("jogador2").valueAsNumber;

    document.getElementById('resultado').innerHTML = `${jogador1} + ${jogador2} = ${(jogador1+jogador2)} ` + parOuImpar (jogador1, jogador2);

}

function parOuImpar (jogador1, jogador2) {
    if ((jogador1 + jogador2)%2==0) {
        return "é PAR";
    } else if ((jogador1 + jogador2)%2==1)
        return "é IMPAR";    
}