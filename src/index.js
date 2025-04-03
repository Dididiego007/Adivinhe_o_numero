let pinExibido = false;
const valorEsperado = gerarPINAleatorio();

function gerarPINAleatorio() {
  let pinAleatorio = Math.floor(Math.random() * 10000); 

  if (pinAleatorio < 1000) {
    pinAleatorio = pinAleatorio.toString().padStart(4, '0');
  }

  return pinAleatorio;
}

function verificarPIN() {
  const entradaUsuario = document.getElementById("entradaUsuario").value;

  if (entradaUsuario.length < 4 || isNaN(entradaUsuario)) {
    exibirAlerta("Insira um número de pelo menos quatro dígitos!");
    return;
  }

  const pin = parseInt(entradaUsuario).toString().padStart(4, '0');

  if (parseInt(pin) === parseInt(valorEsperado)) {
    exibirAlerta("Parabéns! Você acertou o PIN!");
    
  } else {
    const diferenca = parseInt(pin) - parseInt(valorEsperado);
    const mensagem = definirMensagem(diferenca);
    exibirAlerta(mensagem);
    limparEntrada();
  }
}

function definirMensagem(diferenca) {
  if (diferenca > 1000) {
    return "O próximo valor deve ser MUITO menor.";
  } else if (diferenca > 0) {
    return "O próximo valor deve ser menor.";
  } else if (diferenca < -1000) {
    return "O próximo valor deve ser MUITO maior.";
  } else {
    return "O próximo valor deve ser maior.";
  }
}

function exibirAlerta(mensagem) {
  const textoAlerta = document.getElementById("textoAlerta");
  textoAlerta.textContent = mensagem;
  textoAlerta.style.display = "block";

  setTimeout(function() {
    textoAlerta.style.display = "none";
  }, 3500);
}

function exibirPIN() {
  const pinExibidoElemento = document.getElementById("pin");
  const valorPIN = document.getElementById("valorPIN");

  if (!pinExibido) {
    pinExibidoElemento.textContent = valorEsperado;
    valorPIN.style.display = "block";
    pinExibido = true;
  } else {
    valorPIN.style.display = "none";
    pinExibido = false;
  }
}

function limparEntrada() {
  document.getElementById("entradaUsuario").value = "";
}

function reiniciarJogo() {
  window.location.reload();
}
