const numbers = [1, 1, 1, 1, 1, 4];

let resultPar = false;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 == 1){
        resultPar = true 
    }
}
console.log(resultPar);