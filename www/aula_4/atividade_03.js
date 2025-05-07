class Calculadora {
    valor1;
    valor2;

    dividir(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 / this.valor2;
        console.log("O valor da divisão é de: " + resultado)
    }
}

var calc = new Calculadora();

calc.dividir(6, 3);

