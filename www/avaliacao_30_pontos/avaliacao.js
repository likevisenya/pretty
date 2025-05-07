//Alunos: Lucas e Suzana.

//Primeiro desafio

var nome = "Vitor";
var idade = 13;
var cidade = "Valença";
var estudando = true;

console.log(nome + ", " + idade + " anos, " + cidade + ", " + estudando + "!")

//Segundo desafio

if (idade >= 13) {
    console.log("Acesso liberado à plataforma!")
} else {
    console.log("Você ainda não tem idade suficiente para participar.")
}

//Terceiro desafio

function saudacao(nome, cidade) {
    console.log("Olá, " + nome + "! Seja bem-vindo(a) à nossa plataforma. Vejo que você é de " + cidade + "!")
}

saudacao("Vitor", "Valença")

//Quarto desafio

function  calcularMedia(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) /3
    return media;
}

var media = calcularMedia(10, 10, 10)
console.log("A média é de: " + media + " pontos.")

if (media >= 7) {
    console.log("Desempenho bom!")
} else {
    console.log("É necessário melhorar.")
}

