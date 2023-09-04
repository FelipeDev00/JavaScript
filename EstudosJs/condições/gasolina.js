var Etanol = 6.76
var gasolina = 5.79
var Plitros = 10
var distKm = 100

const Lconsumidos = distKm / Plitros
const valorGasolina = Lconsumidos * gasolina
const valorEtanol = Lconsumidos * Etanol
const tipoCombustivel = 'Etanol'

if (tipoCombustivel === 'gasolina') {
    console.log('O valor da sua viagem com etanol é de' + 'R$' + valorEtanol )
} else {
    console.log('O valor da sua viagem com etanol é de' + 'R$' + valorGasolina)
}