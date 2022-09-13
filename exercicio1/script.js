let comer = prompt("Você quer comer mais coxinhas?")
let conta = 0

while(comer === "sim"){
    conta = conta + 2.50
    console.log(conta)
    comer = prompt("Você quer comer mais coxinhas?")
} 
alert("Sua conta deu um total de R$", conta)
