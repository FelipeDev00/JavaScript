class Pessoa {
    nome 
    peso 
    altura
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
    classificarImc(){
        const imc = this.calcularImc()
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
}

const jose = new Pessoa('jose', 70, 1.75)
console.log(jose.classificarImc())
const renan = new Pessoa('felipe', 80, 1.85)
console.log (renan.classificarImc())