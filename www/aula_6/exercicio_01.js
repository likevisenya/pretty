class Celular {
    cor;
    marca;
    tamanho;

    exibirInfo() {
        console.log("O celular " + this.marca + " " + this.cor + " possui " + this.tamanho)
    }
}

let meuCelular = new Celular()
meuCelular.cor = "Vermelho";
meuCelular.marca = "Infinix";
meuCelular.tamanho = "15 cm";

console.log(meuCelular.cor)
console.log(meuCelular.marca)
console.log(meuCelular.tamanho)

meuCelular.exibirInfo()

class Carro {
    cor;
    marca;
    ano;

    exibirInfo(){
        console.log("O carro " + this.cor + ", da marca " + this.marca + " foi lançado em " + this.ano)
    }
}

let meuCarro = new Carro()
meuCarro.cor = "Vermelho";
meuCarro.marca = "BMW";
meuCarro.ano = 2020;

meuCarro.exibirInfo()

let meuCarro2 = new Carro
meuCarro2.cor = "Rosa";
meuCarro2.marca = "BMW";
meuCarro2.ano = 2025;

meuCarro2.exibirInfo()

let meuCarro3 = new Carro
meuCarro3.cor = "Azul marinho";
meuCarro3.marca = "BMW";
meuCarro3.ano = 2091;

meuCarro3.exibirInfo()