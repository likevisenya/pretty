//----------------------------

require("./mensagem")

//----------------------------

const ola = require("./saudacao")

ola("Suzana")

//----------------------------

const soma = require("./soma")

var resultado = soma(5, 4)
console.log("Resultado: " + resultado)

//----------------------------

const verificarIdade = require("./idade");

verificarIdade(18)

//----------------------------

const calc = require("./calculadora")

calc.somar(5, 4)
calc.multiplicar(2, 5)


