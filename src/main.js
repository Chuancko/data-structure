const divScreen = document.querySelector('#screen');
const btnCreatNumber = document.querySelector('#creatNumber');
const btnCallNumber = document.querySelector('#callNumber');
const spanNewNumber = document.querySelector('#newNumber');
const spanQueue = document.querySelector('#queue');

let n = 0;
let queue = [];

btnCreatNumber.onclick = () => {
    n += 1;
    queue.push.call(queue, n);
    spanNewNumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue);
};

btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        alert(`当前没有人取号`);
        return;
    }
    const m = queue.shift.call(queue);
    divScreen.innerText = `请${m}号就餐`;
    spanQueue.innerText = JSON.stringify(queue);

}