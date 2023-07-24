/*The interactive buttons*/
let btnStart = document.querySelector("#start");
let modal = document.querySelector("#modal");
let main = document.querySelector('.main');
let btnReStart= document.querySelector('#restart');

/*The entire gameboard*/
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");

/*Global variables*/
let players=0;
const winSituations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

/*The objects*/
const playerFactory=()=>{
    let score=0;
    let playerNumber=players++;
    const addPoint= () => score++;
    const getScore= () => score;
    return {addPoint,score};
};

const gameboard = (() => {
    let game = [];
    let result = null;
    let positions = 9;
    for(let index = 0; index < 9; index++) {
        game[index] = ' ';
        
    };
    const player1Play = (n) => {
        game[n] = 'X';
        positions--;

    };
    const player2Play = (n) =>{ 
        game[n] = 'O';
        positions--;
    };
    
    const restartGame = () => {
        for (const key in game) {
            game[key]= ' ';
        }
        positions=9;
    };

    const whoWon = () => {
        array.forEach((slash,key) => {
            if (game[slash[0]]=== 'X' && game[slash[1]] === 'X' && game[slash[2]] === 'X') {
                result = 'player1';
                console.log(result);
                return{result};
            } else if (game[slash[0]]=== 'O' && game[slash[1]] === 'O' && game[slash[2]] === 'O'){
                result = 'player2';
                console.log(result);
                return{result};
            } else if(positions===0){
                result = 'tie';
                console.log(result);
                return{result};
            } else{
                result=null;
                console.log(result);
                return{result};
            }
        });
    };
    return {player1Play,player2Play,restartGame,whoWon};
  })();

const player1 = playerFactory();

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
    gameboard.restartGame();
});


