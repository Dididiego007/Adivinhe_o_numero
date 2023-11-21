let pinShown = false;
// Geração de um número aleatório entre 1000 e 9999 para o PIN
const valorEsperado = Math.floor(Math.random() * 9000) + 1000;

console.log(valorEsperado);

function verificarPIN() {
  const userInput = document.getElementById("userInput").value;

  if (userInput.length < 4 || isNaN(userInput)) {
    alert("Insira um número de pelo menos quatro dígitos!");
    return;
  }

  const pin = parseInt(userInput);

  if (pin === valorEsperado) {
    alert("Parabéns! Você acertou o PIN!");
  } else if (pin > valorEsperado) {
    alert("O PIN correto é menor.");
  } else {
    alert("O PIN correto é maior.");
  }
}

function exibirPIN() {
  const pinDisplay = document.getElementById("pin");
  const pinValue = document.getElementById("pinValue");

  if (!pinShown) {
    pinDisplay.textContent = valorEsperado;
    pinValue.style.display = "block";
    pinShown = true;
  } else {
    pinValue.style.display = "none";
    pinShown = false;
  }
}
