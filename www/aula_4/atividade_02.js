class Calculadora {
    valor1;
    valor2;

    multiplicar(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 * this.valor2;
        console.log("O valor da multiplicação é de: " + resultado)
    }
}

var calc = new Calculadora();

calc.multiplicar(2, 3);

