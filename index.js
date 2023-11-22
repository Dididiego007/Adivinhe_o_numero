let pinExibido = false;

// Função para gerar um número PIN aleatório entre 0000 e 9999
function gerarPINAleatorio() {
  let pinAleatorio = Math.floor(Math.random() * 10000); 
  pinAleatorio = 12;
  if (pinAleatorio < 1000) {
    pinAleatorio = pinAleatorio.toString().padStart(4, '0');
  }

  return pinAleatorio;
}

const valorEsperado = gerarPINAleatorio();

// Função para verificar o PIN inserido pelo usuário
function verificarPIN() {
  const entradaUsuario = document.getElementById("entradaUsuario").value;

  if (entradaUsuario.length < 4 || isNaN(entradaUsuario)) {
    exibirAlerta("Insira um número de pelo menos quatro dígitos!");
    return;
  }

  const pin = parseInt(entradaUsuario).toString().padStart(4, '0');

  if (pin === valorEsperado) {
    exibirAlerta("Parabéns! Você acertou o PIN!");
  } else {
    const diferenca = pin - valorEsperado;
    let mensagem = "";
    if (diferenca > 100) {
      mensagem = "O próximo valor deve ser muito menor.";
    } else if (diferenca > 0) {
      mensagem = "O próximo valor deve ser menor.";
    } else if (diferenca < -100) {
      mensagem = "O próximo valor deve ser muito maior.";
    } else {
      mensagem = "O próximo valor deve ser maior.";
    }
    exibirAlerta(mensagem);
  }
}

// Função para exibir mensagens na página 
function exibirAlerta(mensagem) {
  const textoAlerta = document.getElementById("textoAlerta");
  textoAlerta.textContent = mensagem;
  textoAlerta.style.display = "block";
 
  setTimeout(function() {
    textoAlerta.style.display = "none";
  }, 3500);
}

// Função para exibir ou ocultar o PIN correto ao clicar no botão correspondente
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
