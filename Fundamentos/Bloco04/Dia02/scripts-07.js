let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = 0;

for (let index = 0; index < numbers.length; index +=1){
    if( menor == 0 ){
        menor = numbers[index]
    }
    else{
        if(menor > numbers[index]){
            menor = numbers[index]
        }
    }
    
    
}
console.log(menor)