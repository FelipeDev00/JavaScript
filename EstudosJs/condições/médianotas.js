const nota1 = 9
const nota2 = 8
const nota3 = 7

const media = ((nota1 + nota2 + nota3) / 3)
console.log('A média do aluno é de' + media.toFixed(1))

if(media < 5){
    console.log('O aluno está reprovado')
}   else if(media > 5 && media < 7 ){
    console.log('O aluno está em recuperação')
}   else{
    console.log('O aluno foi aprovado')
}