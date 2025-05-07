class Pessoa {
    nome;
    idade;

    falar(nome, idade) {
        console.log("Olá, eu sou " + nome)
        console.log("Minha idade é " + idade)
    }
}

var pessoa = new Pessoa()

pessoa.falar("Suzana", 20)