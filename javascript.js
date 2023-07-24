let btnStart = document.querySelector("#start");
let modal = document.querySelector("#modal");
let closing = document.querySelector(".close-modal");
let submit = document.querySelector("#submit");
let main = document.querySelector('.main');
let btnReStart= document.querySelector('#restart');

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");


btnStart.addEventListener('click', () => {
    btnStart.remove();
    modal.classList.remove('notOpen');
    modal.classList.add('opened');
    btnReStart.classList.remove('notOpen');
    btnReStart.textContent='ReStart';
    btnReStart.classList.toggle('restart');
    main.appendChild(btnReStart);
});




box1.addEventListener('click', () => {
    box1.classList.add('player1');
});

btnReStart.addEventListener('click', () => {
    box1.classList.remove('player1');
    box2.classList.remove('player1');
    box3.classList.remove('player1');
    box4.classList.remove('player1');
    box5.classList.remove('player1');
    box6.classList.remove('player1');
    box7.classList.remove('player1');
    box8.classList.remove('player1');
    box9.classList.remove('player1');
    box1.classList.remove('player2');
    box2.classList.remove('player2');
    box3.classList.remove('player2');
    box4.classList.remove('player2');
    box5.classList.remove('player2');
    box6.classList.remove('player2');
    box7.classList.remove('player2');
    box8.classList.remove('player2');
    box9.classList.remove('player2');
});


