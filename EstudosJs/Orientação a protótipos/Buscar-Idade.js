const pessoa = {
    idade: 20
}

const felipe = {
    nome: 'Felipe',
    idade: 30,
    __proto__: pessoa
}

console.log(felipe.idade)