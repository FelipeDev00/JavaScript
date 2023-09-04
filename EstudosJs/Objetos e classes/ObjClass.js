class Carro {
    marca
    cor
    GastoPorKm
    
    constructor(marca, cor, GastoPorKm) {
        this.marca = marca
        this.cor = cor
        this.GastoPorKm = GastoPorKm
    }

    calcularGasto(distancia, precoCombustivel){
        return distancia * this.GastoPorKm * precoCombustivel
    }
}
const uno = new Carro ('Fiat', 'preto', 1/12)

console.log(uno.calcularGasto(70, 5))
const palio = new Carro ('fiat', 'preto', 1/10)
console.log(palio.calcularGasto(70, 5))