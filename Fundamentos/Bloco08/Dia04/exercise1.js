const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// função que recebe como parâmetro uma matriz, e retorna um unico array com os valores;
function flatten(array) {
  return array.reduce((previousValue, item) => previousValue.concat(item));
}
