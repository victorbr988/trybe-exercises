// Crie uma função que receba uma frase e retorne qual a maior palavra.
function sepear(phrase) {
  const splitPhrases = phrase.split(" ");
  let maxWord = '';

  splitPhrases.forEach((element) => {
    element.length > maxWord.length ? maxWord = element: maxWord;
  });

  return maxWord;
}