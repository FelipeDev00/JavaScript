const { gets, print } = require ('./funcoes-auxiliares');

const salarioBruto = gets();
const adicionalBeneficio = gets();

function calcularPorcentagem(valor, percentual){

    return valor * (percentual / 100);
}

function percentualBaseSalario(salarioBruto){
    if(salarioBruto > 0 && salarioBruto <= 1100){
        return 5;
    } 
    else if(salarioBruto > 1100 && salarioBruto <= 2500){
        return 10;
    }
    else if (salarioBruto > 2500){
        return 15;
    }
    else{
        return 'Valor inválido';
    }



}

const aliquotaDoImposto = percentualBaseSalario(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaDoImposto);
const valorATransferir = salarioBruto - valorImposto + adicionalBeneficio;

print(valorATransferir);