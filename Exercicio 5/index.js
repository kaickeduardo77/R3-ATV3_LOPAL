let primeiroNum =  parseInt(prompt("Digite o primeiro número"));
let segundoNum = parseInt(prompt("Digite o segundo número"));
let mensagem = "";// Declara uma variável para armazenar a mensagem com os números pares encontrados

if (isNaN(primeiroNum) || isNaN(segundoNum)) {
    alert("Você não digitou um valor válido");  // Caso alguma entrada seja inválida, exibe uma mensagem de erro
}  else {
    
    for (let i = primeiroNum; i < segundoNum; i++ ) {

        if (i % 2 == 0) {
            mensagem += i + " "
        }
    }
    
}
alert(mensagem);


if (isNaN(numero1) || isNaN(numero2)) {
    alert("Você não digitou um número em algum dos casos");
}  else {
    
    for (let i = numero1; i <= numero2; i++ ) {

        if (i % 2 == 0) {
            mensagem += i + " "
        }
    }
    
}
alert(mensagem);