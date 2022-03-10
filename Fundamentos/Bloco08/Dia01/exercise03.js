function verifyGabaraito(correct, verify) {
  const responseCorect = correct;
  const reesponseVerify = verify;
  let maxNota = responseCorect.length
  let nota = 0;

  for (let i = 0; i < responseCorect.length; i += 1) {

    if (reesponseVerify[i] === responseCorect[i]) {
      nota += 1
    }
  }
  console.log(reesponseVerify);
  console.log(responseCorect);
  return nota
}

function hof(correct, verify, callback) {
  return callback(correct, verify)
}
console.log(hof(['E', 'A', 'E', 'E'], ['G', 'A', 'G', 'E'], verifyGabaraito))
