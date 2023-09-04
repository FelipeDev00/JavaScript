function CalcularImc (peso, altura){
    return peso / (altura * altura)
}


function ClassificarImc(imc){
    if (imc < 18.5) {
    return 'você está abaixo do peso'
}
else if (imc >= 18.5 && imc <= 25) {
    return 'você está com peso normal'
}
else if (imc >= 25 && imc <= 32) {
    return 'você está acima do peso'
}
else if (imc >= 30 && imc <= 40) {
    return 'você está em obesidade'
}
else {
    return 'você está em obesidade grave'
}
}
function main(){
    const peso = 75
const altura = 1.85

const imc = CalcularImc(peso, altura)
console.log (`Seu IMC é de ${imc.toFixed(1)} ${ClassificarImc(imc)}`)

}
main()


