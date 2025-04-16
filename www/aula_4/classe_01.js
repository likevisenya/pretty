class Carro {
    marca;
    modelo;
    ano;
    
    ligar() {
        console.log("O carro está ligado.");
    }
}

let meuCarro = new Carro();
meuCarro.marca = "Toyota";
meuCarro.modelo = "Corolla";
meuCarro.ano = 2020;

console.log(meuCarro.marca)
console.log(meuCarro.modelo)
console.log(meuCarro.ano)
meuCarro.ligar()

class Calculadora {
    valor1;
    valor2;

    somar(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
    var resultado = this.valor1 + this.valor2;
    console.log("O resultado da soma é de: " + resultado)
    }
}

var calc = new Calculadora();

calc.somar(7, 3);