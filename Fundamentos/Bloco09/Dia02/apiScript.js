// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

// function to send response on screen
function seeInScreen(string) {
  const getH2 = document.querySelector('#jokeContainer');
  return getH2.innerHTML = string;
}

async function fetchJoke(){
  // object with specific API on request 
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => seeInScreen(data.joke))
    .catch((error) => `Algo deu errado: ${(error)}`);
};

window.onload = () => fetchJoke();