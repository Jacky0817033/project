const timeTxt = document.getElementById('timeTxt');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let time = 0;
let playTime = null;


let playFn = () =>{
    resetStateFn();
    play.classList.add('active');
    playTime = setInterval(() =>{
        time++;
        timeTxt.innerText = time;
    },1000);
    play.removeEventListener('click', playFn);
};
let stopPlayFn = () =>{
    resetStateFn();
    clearInterval(playTime);
    stop.classList.add('active');
    play.addEventListener('click', playFn);
};
let resetPlayFn = () =>{
    resetStateFn();
    time = 0;
    timeTxt.innerText = time;
    clearInterval(playTime);
    reset.classList.add('active');
};

let resetStateFn = () =>{
    play.classList.remove('active');
    stop.classList.remove('active');
    reset.classList.remove('active');
}

let initStateFn = () =>{
    play.addEventListener('click', playFn);
    stop.addEventListener('click', stopPlayFn);
    reset.addEventListener('click', resetPlayFn);
}

initStateFn();