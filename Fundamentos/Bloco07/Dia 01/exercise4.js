// Crie uma função que receba uma frase e retorne qual a maior palavra.
function sepear(phrase) {
  const splitPhrases = phrase.split(" ");
  
  let maxWord= [];

  splitPhrases.forEach((element, index) => {
    maxWord[0] = (element);
    element > splitPhrases[index] ? splitPhrases[index] = element: splitPhrases[index];
  });

  return maxWord;
}
console.log(sepear('hoje eu vou parar na gaiola'))