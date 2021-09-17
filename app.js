function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11)
  var chute = Number(document.getElementById('valor').value)
  var resultado = document.getElementById('resultado')
  // console.log(chute)

  if (chute == numeroSecreto) {
    resultado.innerHTML = 'Parabéns você acertou!'
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = 'Escolha um numero entre 0 e 10'
  } else {
    resultado.innerHTML =
      'Infelizmente você errou, o número secreto   era ' + numeroSecreto
  }
}
