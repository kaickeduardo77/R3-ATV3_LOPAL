const num = parseInt(prompt("digite um numero para saber quais os compoe"));

if (isNaN(num) || num <= 1) {
    alert("você colocou um numero invalido") //essa mensagem irá aparecer caso coloque um número invalido
} else {
    let sequencia = ""

    for (let i = 1; i <= num; i++) {
        sequencia = sequencia + " " + i;

    }
    alert(sequencia);

}