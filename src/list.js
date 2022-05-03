const createNode = (value) => {
    return {
        data: value,
        next: null
    }
};

const createList = (value) => {
    return createNode(value);
};
const appendList = (list, value) => {
    const node = createNode(value);
    let x = list;
    while (x.next) {
        x = x.next;
    }
    // x.next === null ,x是最后一个节点
    x.next = node;
    return node;
};

const removeFromList = (list, node) => { //通过遍历找当前节点的上一个节点
    debugger;
    let x = list;
    let p = node;
    while (x !== node && x !== null) { //确保node在list中且不为null
        p = x;
        x = x.next;
    }
    if (x === null) {
        return false;
    } else if (x === p) {
        p = x.next;
        return p // 如果删除的是第一个节点，返回新list的头节点
    } else {
        p.next = x.next;
        return list
    }
};
const travelList = (list, fn) => {
    let x = list;
    while (x !== null) {
        fn(x);
        x = x.next;
    }
};


const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
// removeFromList(list, node3);
travelList(list, node => {
    console.log(node.data)
});
setInterval
// console.log('list');
// console.log(list);