function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`meu nome é: ${this.nome}`)
}

const felipe = new Pessoa('Felipe', 30)

felipe.falar()