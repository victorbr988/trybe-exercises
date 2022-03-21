const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  const arrayWithLetter = [];
  let upperCase = 0;
  let lowerCase = 0;

  array.forEach((element) => arrayWithLetter.push(Object.values(element)));
  arrayWithLetter.forEach((element) => {

    if(element.includes('A')) {
      upperCase += 1;
    }
    if(element.includes('a')) {
      lowerCase += 1;
    }
  })
  
  return `existes ${upperCase} letras 'a' maiúsculas e ${lowerCase} minúsulas`;
};
console.log(containsA(names))

// AINDA EM DESENVOLVIMENTO