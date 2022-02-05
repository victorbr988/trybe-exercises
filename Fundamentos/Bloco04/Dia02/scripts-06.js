let numbers = [1, 10, 4, 18, 70, 8, 100, 2, 36, 28];

let numbersImpar = [];

for(let index = 0; index < numbers.length; index += 1){
    
    if(numbers[index] % 2 == 1){
        numbersImpar.push(numbers[index])
    }
        
}

if(numbersImpar.length < 1){
    console.log("Não existem números ímpares")
}else{
    console.log(numbersImpar)
}
