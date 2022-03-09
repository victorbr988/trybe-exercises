const generateNumber = Math.round(Math.random() * 6);

function checkValue(number1) {
  if(number1 === generateNumber) {
    return 'Parabéns você ganhou'
  }
  return 'Tente de novo'
}

function comPareNumberOf(number, checkValue) {
  return checkValue(number)
}
console.log(generateNumber)
console.log(comPareNumberOf(3, checkValue))