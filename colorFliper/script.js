let hex = document.querySelector('p');
let btn = document.querySelector('button');
let colorChange = btn.parentElement.parentElement;
const hexArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let hexs = '#';
let randomNum = () => {
    return Math.floor(Math.random() * hexArr.length);
}

let colorNum = () => {
    hexs = '#';
    for (let i = 0; i < 6; i++) {
        hexs += hexArr[randomNum()];
    }

    colorChange.style.backgroundColor = hexs;
}


let time = setInterval(() => {
    colorNum();
    hex.innerText = hexs;
}, 500);


btn.addEventListener('click', () =>{
    clearInterval(time);
});