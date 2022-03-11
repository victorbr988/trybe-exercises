// algoritmo para determinar quantas questões o estudante acertou!
function validityResponseStudent(correct, student) {
  let nota = 0;

  correct.forEach((element, index) => {
    if(element == student[index]) {
      nota += 1
    }
  });
  console.log(nota) 
}

function receivedValues(correct, student, callback) {
  return callback(correct, student)
}
receivedValues(['E', 'A', 'E', 'E'], ['F', 'F', 'G', 'E'], validityResponseStudent);
