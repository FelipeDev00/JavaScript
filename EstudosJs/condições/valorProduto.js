const camiseta = 100
const debito = (camiseta - camiseta * 0.1)
const pix = (camiseta - camiseta * 0.15)
const dois = (camiseta)
const dez = (camiseta + camiseta * 0.1)

const pagamento = debito

if (pagamento === debito) {
    console.log(debito)
}
else if (pagamento === pix) {
    console.log(pix)
}
else if (pagamento === dois) {
    console.log(dois)
}
else {
    console.log(dez)
}