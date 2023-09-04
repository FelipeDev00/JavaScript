function MeuNome(nome){
    return `Seu nome é ${nome}`
}

function idade (idade){
    if (idade >= 18){
        console.log(`${MeuNome('Felipe')} você tem ${idade} anos, é maior de idade`)
    } else(console.log(`${MeuNome('Felipe')} Você é menor de idade.`))
}
idade(18)