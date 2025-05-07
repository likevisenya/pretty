class Produto {
    nome;
    marca;
    preco;

    adicionar() {
        console.log("O produto foi adicionado ao estoque.");
    }
}

var celular = new Produto()

celular.nome = "Iphone 14 Pro";
celular.marca = "Iphone";
celular.preco = 4500;

console.log("Nome do celular: " + celular.nome)
console.log("Marca do celular: " + celular.marca)
console.log("Preço do celular: " + celular.preco)
celular.adicionar()

var carregador = new Produto()

carregador.nome = "Carregador Tipo C";
carregador.marca = "Baseus";
carregador.preco = 20;

console.log("Nome do carregador: " + carregador.nome)
console.log("Marca do carregador: " + carregador.marca)
console.log("Preço do carregador: " + carregador.preco)
carregador.adicionar()