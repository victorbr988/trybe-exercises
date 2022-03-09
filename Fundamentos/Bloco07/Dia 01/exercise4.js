// Crie uma função que receba uma frase e retorne qual a maior palavra.
function sepear(phrase) {
  const splitPhrases = phrase.split(" ");
  let maxPhrase = '';
  for (let i = 0; i < splitPhrases.length; i += 1) {
    maxPhrase = [splitPhrases[i]];
    splitPhrases[i] > maxPhrase.length ? maxPhrase = splitPhrases[i] : maxPhrase = maxPhrase;
  }
  return maxPhrase;
}