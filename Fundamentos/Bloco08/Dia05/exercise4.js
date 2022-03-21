const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// retornar todas as pessoas que nasceram na autrália no século 20;
function PeoplesCenturyTwenty(array) {
  return array.filter(({bornIn, nationality}) =>  {
      return nationality === 'Australian' && bornIn > 1900 && bornIn < 2000;
  });
}
console.log(PeoplesCenturyTwenty(people))
