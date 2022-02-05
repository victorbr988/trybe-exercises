let salarioBruto = 10000;
let totalDescontosINSS = 0;

if (salarioBruto <= 1556.94) {
    totalDescontosINSS = (salarioBruto * 8) / 100;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.29){
    totalDescontosINSS = (salarioBruto * 9) / 100;
}
else if(salarioBruto >= 2594.93 && salarioBruto <  5189.82){
    totalDescontosINSS = (salarioBruto * 11) / 100;
}
else if(salarioBruto >= 5189.82){
    totalDescontosINSS = 570.88;
}

let totalDescontosIR = 0;
let salarioBase = salarioBruto - totalDescontosINSS;

if(salarioBase <= 1903.98){
    console.log(`Insento de imposto de renda com salário de ${salarioBase}`)
}

if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    totalDescontosIR = (salarioBase * 7.5) / 100 - 142.80;
}
else if(salarioBase >= 2826.66 && salarioBase <= 3751.05 ){
    totalDescontosIR = (salarioBase * 15) / 100 - 354.80;
}
else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    totalDescontosIR = (salarioBase * 22.5) / 100 - 636.13;
}
else{
    totalDescontosIR = (salarioBase * 27.5) / 100 - 869,36;
}

let totalLiquido = salarioBase - totalDescontosIR;
console.log(`Seu salário líquido é de ${totalLiquido.toFixed(2)}`);