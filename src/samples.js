const { LinkedList } = require('./singlyLinkedList');

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomArray(size, minInt, maxInt) {
    let outputArray = new Array(size)
    let usedNums = {}
    for (let i = 0; i < size; i++) {
        let num = randomNum(minInt, maxInt)
        if (maxInt - minInt >= size) {
            while (usedNums[num]) num = randomNum(minInt, maxInt)
        }
        outputArray[i] = num;
        usedNums[num] = true;
    }
    return outputArray;
}

function orderedArray(size, startInt) {
    let outputArray = new Array(size)
    let num = startInt;
    for (let i = 0; i < size; i++) {
        outputArray[i] = num;
        num++
    }
    return outputArray;
}

let listSmOrder = new LinkedList;
listSmOrder.insertLastFromArray(orderedArray(3, 1))

let listSmRandom = new LinkedList;
// console.log('listSmRandom')
listSmRandom.insertLastFromArray(randomArray(3, 0, 10));

let listMdOrder = new LinkedList;
// console.log('listMdOrder')
listMdOrder.insertLastFromArray(orderedArray(10, 1));

let listMdRandom = new LinkedList;
// console.log('listMdRandom')
listMdRandom.insertLastFromArray(randomArray(10, 0, 1));

let listLgOrder = new LinkedList;
// console.log('listLgOrder')
listLgOrder.insertLastFromArray(orderedArray(25, 1));

let listLgRandom = new LinkedList;
// console.log('listLgRandom')
listLgRandom.insertLastFromArray(randomArray(25, 0, 99));



module.exports = {
    listSmOrder, listSmRandom, listMdOrder, listMdRandom, listLgOrder, listLgRandom,

}