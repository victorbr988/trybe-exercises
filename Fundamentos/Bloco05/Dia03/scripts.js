function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
    let getUl = document.querySelector('#days');
    
    let getButton = document.querySelector('.buttons-container');

  const dezDaysList = [
      29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
      14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
      27, 28, 29, 30, 31
];

for (let index = 0; index < dezDaysList.length; index += 1) {
    let daysItems = dezDaysList[index];

    let createTag = document.createElement('li');
    createTag.innerText = daysItems;
    createTag.className = 'day';
    
    getUl.appendChild(createTag);

    if ( daysItems === 24 || daysItems === 31){
        createTag.className = 'day holiday';
    }
    if ( daysItems === 25) {
        createTag.className = 'day holiday friday';
    }
    if( daysItems === 4 || daysItems === 11 || daysItems === 18){
        createTag.className = 'day friday';
    }
}


let createButton = document.createElement('button');
getButton.appendChild(createButton);

createButton.className = 'btn-holiday';
createButton.innerText = 'Feriados';

createButton.addEventListener('click', alteraBackgorund());

let createNewButton = document.createElement('button');
let getClassFriday = document.getElementsByClassName('day friday')
getButton.appendChild(createNewButton);
createNewButton.innerText = 'Sexta-feira';
createNewButton.className = 'btn-holiday';

createNewButton.addEventListener('click', () =>{
    for(let i = 0; i < getClassFriday.length; i += 1){
        let valueClass = getClassFriday[i];
        valueClass.innerText = 'SEXTOU!';
    }
    createNewButton.addEventListener('click', () => {
        window.location.reload();
    })
    
})

function alteraBackgorund() {
    for(let a = 0; a < getClass.length; a += 1){
        let newvall = getClass[a];
        newvall.style.backgroundColor = "white";
    }
    
}

