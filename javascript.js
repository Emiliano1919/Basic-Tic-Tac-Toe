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
    let turn = 1;

    for(let index = 0; index < 9; index++) {
        game[index] = ' ';
        
    };
    const getTurn = () => turn;
    const getWinner = () => result;
    
    const player1Play = (n) => {
        game[n-1] = 'X';
        positions--;
        turn++;
    };
    const player2Play = (n) =>{ 
        game[n-1] = 'O';
        positions--;
        turn++;
    };
    
    const restartGame = () => {
        for (const key in game) {
            game[key]= ' ';
        }
        positions=9;
        turn=1;
    };
   

    const check = () => {
        array.forEach((slash,key) => {
            if (game[slash[0]]=== 'X' && game[slash[1]] === 'X' && game[slash[2]] === 'X') {
                result = 'player1';
            } else if (game[slash[0]]=== 'O' && game[slash[1]] === 'O' && game[slash[2]] === 'O'){
                result = 'player2';
            } else if(positions===0){
                result = 'tie';
            } else{
                result=null;
            }
        });
    };

    return {turn:getTurn,player1Play,player2Play,restartGame,check,getWinner,};
  })();

const player1 = playerFactory();
const player2 = playerFactory();

btnStart.addEventListener('click', () => {
    btnStart.remove();
    modal.classList.remove('notOpen');
    modal.classList.add('opened');
    btnReStart.classList.remove('notOpen');
    btnReStart.textContent='ReStart';
    btnReStart.classList.toggle('restart');
    main.appendChild(btnReStart);
});


if (gameboard.getWinner()===null){
    box1.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box1.classList.contains('player1') || box1.classList.contains('player2'))){
            box1.classList.add('player1');
            gameboard.player1Play(1);
            console.log(gameboard.game);
            console.log(gameboard.turn());
        } else if (gameboard.turn() % 2 === 0 && !(box1.classList.contains('player1') || box1.classList.contains('player2'))){
            box1.classList.add('player2');
            gameboard.player2Play(1);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    
    box2.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box2.classList.contains('player1') || box2.classList.contains('player2'))){
            box2.classList.add('player1');
            gameboard.player1Play(2);
        } else if (gameboard.turn() % 2 === 0 && !(box2.classList.contains('player1') || box2.classList.contains('player2'))){
            box2.classList.add('player2');
            gameboard.player2Play(2);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box3.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box3.classList.contains('player1') || box3.classList.contains('player2'))){
            box3.classList.add('player1');
            gameboard.player1Play(3);
        } else if (gameboard.turn() % 2 === 0 && (box3.classList.contains('player1') || box3.classList.contains('player2'))){
            box3.classList.add('player2');
            gameboard.player2Play(3);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box4.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box4.classList.contains('player1') || box4.classList.contains('player2'))){
            box4.classList.add('player1');
            gameboard.player1Play(4);
        } else if (gameboard.turn() % 2 === 0 && !(box4.classList.contains('player1') || box4.classList.contains('player2'))){
            box4.classList.add('player2');
            gameboard.player2Play(4);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box5.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box5.classList.contains('player1') || box5.classList.contains('player2'))){
            box5.classList.add('player1');
            gameboard.player1Play(5);
        } else if (gameboard.turn() % 2 === 0 && !(box5.classList.contains('player1') || box5.classList.contains('player2'))){
            box5.classList.add('player2');
            gameboard.player2Play(5);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box6.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box6.classList.contains('player1') || box6.classList.contains('player2'))){
            box6.classList.add('player1');
            gameboard.player1Play(6);
        } else if (gameboard.turn() % 2 === 0 && !(box6.classList.contains('player1') || box6.classList.contains('player2'))){
            box6.classList.add('player2');
            gameboard.player2Play(6);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box7.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box7.classList.contains('player1') || box7.classList.contains('player2'))){
            box7.classList.add('player1');
            gameboard.player1Play(7);
        } else if (gameboard.turn() % 2 === 0 && !(box7.classList.contains('player1') || box7.classList.contains('player2'))){
            box7.classList.add('player2');
            gameboard.player2Play(7);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box8.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box8.classList.contains('player1') || box8.classList.contains('player2'))){
            box8.classList.add('player1');
            gameboard.player1Play(8);
        } else if (gameboard.turn() % 2 === 0 && !(box8.classList.contains('player1') || box8.classList.contains('player2'))){
            box8.classList.add('player2');
            gameboard.player2Play(8);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
    box9.addEventListener('click', () => {
        if (gameboard.turn() % 2 === 1 && !(box9.classList.contains('player1') || box9.classList.contains('player2'))){
            box9.classList.add('player1');
            gameboard.player1Play(9);
        } else if (gameboard.turn() % 2 === 0 && !(box9.classList.contains('player1') || box9.classList.contains('player2'))){
            box9.classList.add('player2');
            gameboard.player2Play(9);
        }else{
            alert('play another move');
        }
        gameboard.check();
    });
} else{
    alert(gameboard.getWinner());
}




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


