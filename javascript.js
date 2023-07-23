let btnStart = document.querySelector("#start");
let modal = document.querySelector("#modal");
let closing = document.querySelector(".close-modal");
let submit = document.querySelector("#submit");

btnStart.addEventListener('click', () => {
    btnStart.remove();
    modal.classList.remove('notOpen');
    modal.classList.add('opened');
});