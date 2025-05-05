const numero = parseInt(prompt("Digite um número para ver a tabuada de 1 a 10:"));
// Solicita ao usuário que digite um número e converte a entrada para um número inteiro


if (!isNaN(numero)) {    
   // Inicializa a variável que irá armazenar o resultado da tabuada
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + " | ";
  }

  alert("Tabuada de " + numero + ": " + resultado);
} else {
  alert("Você digitou um valor inválido.");
  // Caso o valor digitado não seja um número, exibe uma mensagem de erro

}
