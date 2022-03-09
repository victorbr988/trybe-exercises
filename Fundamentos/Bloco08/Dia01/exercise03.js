function verifyGabaraito(correct, verify) {
  const responseCorect = correct;
  const reesponseVerify = verify;
  let nota = 0;

  for (let i = 0; i < responseCorect.length; i += 1) {

    if(reesponseVerify.indexOf(responseCorect[i]) === -1) {
      nota -= 0.5
    }
    if (reesponseVerify.indexOf(responseCorect[i]) > -1) {
      nota += 1;
      
    }
  }
  console.log(reesponseVerify);
  return nota
}

function hof(correct, verify, callback) {
  return callback(correct, verify)
}
console.log(hof(['A', 'B', 'C', 'D'], ['A', 'B', 'A', 'D'], verifyGabaraito))
