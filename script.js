const hexNumbers = [0,1,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const hexBtn = document.querySelector('.hexBtn');
const newColor = document.querySelector('.square');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex(){

    let hexCol = '#';

    for(let i = 0; i<6 ; i++){

        let random = Math.floor(Math.random()*hexNumbers.length);

        hexCol += hexNumbers[random];
    }

    newColor.style.backgroundColor = hexCol;
    hex.style.color=hexCol;
    hex.innerHTML = hexCol;
}
