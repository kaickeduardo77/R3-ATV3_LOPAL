let soma = 0;
//Solicita ao usuário que digite uma nota e converte o valor 

for (let i = 1; i <= 5; i++) {
  const nota = parseFloat(prompt("Digite a nota " + i + ":"));

// Verifica se a nota é um número válido e está no intervalo de 0 a 10
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    soma += nota;
  } else {

    // Se a nota for inválida, exibe um alerta e considera a nota como 0 (não soma nada)
    alert("Nota inválida. Será considerada como 0.");
  }
}

let media = soma / 5;
// Calcula a média dividindo a soma total por 5 (quantidade de notas)

alert("A média das 5 notas é: " + media);
// Exibe a média final em uma janela de alerta


 