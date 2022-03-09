const getCount = document.querySelector('#coutclick')
const getButton = document.querySelector('#btnclick');

let amout = 0
getButton.addEventListener('click', () => {
  getCount.innerText = amout += 1
})