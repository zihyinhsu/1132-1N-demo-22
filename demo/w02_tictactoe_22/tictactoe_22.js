const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const container = document.querySelector('.container');
const alert = document.querySelector('.alert');
const allLi = document.querySelectorAll('.board li');
const resetBtn = document.querySelector('.reset');



const winMessage = (player) => {
    if(player === 'o'){
        container.style.backgroundColor = 'rgba(144,238,144,0.5)';
        alert.style.backgroundColor = 'rgba(144,238,144,0.5)';
        alert.style.color = 'green';
        alert.style.display = 'block';
        alert.textContent = 'Player O wins!';
    }else {
        container.style.backgroundColor = 'rgba(240,118,128,0.726)';
        alert.style.backgroundColor = 'rgba(240,118,128,0.726)';
        alert.style.color = 'purple';
        alert.style.display = 'block';
        alert.textContent = 'Player X wins!';
    }
};

const tieMessage = () => {
    alert.style.backgroundColor = '#888';
    alert.style.color = '#ddd';
    alert.style.display = 'block';
    alert.textContent = 'tie!';
};

winMessage('o');
// tieMessage();

const reset = () => {
    alert.style.display = 'none';
    container.style.backgroundColor = '#666';
    allLi.forEach(li => {
        li.textContent = '+';
        li.classList = '';
    });
}

resetBtn.addEventListener('click', reset);