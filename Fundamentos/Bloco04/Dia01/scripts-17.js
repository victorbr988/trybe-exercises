const valorDeVenda = 3600;
const valorDeCusto = 1200;

let impostoSobreCusto = (valorDeCusto * 20) / 100;
let valorDoCustoTotal = valorDeCusto + impostoSobreCusto

let valorDeLucro = valorDeVenda - valorDoCustoTotal;

console.log(valorDeLucro)

