const { LinkedList } = require('./singlyLinkedList');
const {randomArray, orderedArray} = require('./helpFunctions');


/*SINGLY LINKED LIST SAMPLES */

let listSmOrder = new LinkedList;
listSmOrder.insertLastFromArray([1, 2, 3]);
// listSmOrder.insertLastFromArray(orderedArray(3, 1));

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