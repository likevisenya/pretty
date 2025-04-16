class Produto {
    nome;
    preco;
    quantidade;

    calcularTotal(preco, quantidade) {
        this.preco = preco;
        this.quantidade = quantidade;
        var resultado = this.preco * this.quantidade;
        console.log("O preço em quantidade é de: " + resultado)
    }

}

calc = new Produto();

calc.calcularTotal(9, 10);

