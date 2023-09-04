const peso = 75
const altura = 1.85

const imc = peso / (altura * altura)
console.log('Seu IMC é de' + imc.toFixed(1))

if (imc < 18.5) {
    console.log('você está abaixo do peso')
}
else if (imc >= 18.5 && imc <= 25) {
    console.log('você está com peso normal')
}
else if (imc >= 25 && imc <= 32) {
    console.log('você está acima do peso')
}
else if (imc >= 30 && imc <= 40) {
    console.log('você está em obesidade')
}
else {
    console.log('você está em obesidade grave')
}
