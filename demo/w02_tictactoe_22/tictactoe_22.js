const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const container = document.querySelector('.container');
const alert = document.querySelector('.alert');
const allLi = document.querySelectorAll('.board li');
const resetBtn = document.querySelector('.reset');

const checkWin = (player) => {
    let p = [];
    allLi.forEach(item => {
        p.push(item.classList.contains(player));
    });
    console.log('p', p);
    const [p1,p2,p3,p4,p5,p6,p7,p8,p9] = p;
    if(p1 && p2 && p3 || p4 && p5 && p6 || p7 && p8 && p9 || p1 && p4 && p7 || p2 && p5 && p8 || p3 && p6 && p9 || p1 && p5 && p9 || p3 && p5 && p7){
    return true
    }
    return false;
}
console.log("checkWin('o')",checkWin('o'));
console.log("checkWin('x')",checkWin('x'));

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

// winMessage('o');
// tieMessage();

const reset = () => {
    alert.style.display = 'none';
    container.style.backgroundColor = '#666';
    allLi.forEach(li => {
        li.textContent = '+';
        li.classList = '';
    });
    turn = 0;
    done = false;
}

const go = (item, player, text) => {
    item.textContent = text;
    item.classList.add(player, 'disabled');
    if(checkWin(player)){
        winMessage(player);
        done = true;
    }
}

allLi.forEach(item => {
    item.addEventListener('click', function(){
        if(item.classList.contains('disabled')){
            alert('already filled');
        }else {
            if(turn % 2 === 0){
                go(item, 'o', 'o');
            }else if(turn % 2 === 1){
                go(item, 'x', 'x');
            }
            if(!done && turn < 8) turn++;
            else if (!done && turn === 8) tieMessage();
        }
    });
});

resetBtn.addEventListener('click', reset);