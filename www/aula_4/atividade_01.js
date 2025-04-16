class Livro {
    titulo;
    autor;

    exibirInfo() {
        console.log("O título do livro é: " + this.titulo + " e foi escrito por " + this.autor + ". ")
    }
}

let meuLivro = new Livro();
meuLivro.titulo = "A Dança dos Dragões";
meuLivro.autor = "Martin";

console.log(meuLivro.titulo)
console.log(meuLivro.autor)
meuLivro.exibirInfo()