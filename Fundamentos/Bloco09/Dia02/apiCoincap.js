let API_URL = `https://api.coincap.io/v2/assets/`;
// how to send response API to screen user? 
function sendResponseApiInScreen(object) {
  const getElementH2 = document.querySelector('#listCoins');
  const CreateLi = document.createElement('li');
  CreateLi.id = 'coinsInfo'
  CreateLi.style.listStyle = 'none';
  getElementH2.appendChild(CreateLi);

  return CreateLi.innerHTML = object;
}
// how to access  API ?
async function accessApi(coinName) {
  // await response API
  await fetch(API_URL)
  .then((response) => response.json())
  .then((dado) =>{
    if (coinName !== undefined) {
      const objectCoinInfo = dado.data.find((object) => object.id === coinName);
      return sendResponseApiInScreen(
        `${objectCoinInfo.symbol} = ${Number(objectCoinInfo.priceUsd).toFixed(2)}
        `);
    }
    dado.data.filter((object, index) =>  {
      if(index < 10) {
        return sendResponseApiInScreen(`${object.symbol} = ${Number(object.priceUsd).toFixed(2)}`);
      }
    })
  });
}
  
accessApi();