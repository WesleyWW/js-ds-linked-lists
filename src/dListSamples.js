const { DoublyLinkedList }  = require('./doublyLinkedLists');

const {
    randomArray,
    orderedArray }          = require('./helpFunctions');

/* DOUBLY LINKED LIST SAMPLES */
let dListSmOrder = new DoublyLinkedList;
dListSmOrder.insertLastFromArray([1, 2, 3]);

let dListSmRandom = new DoublyLinkedList;
dListSmRandom.insertLastFromArray(randomArray(3, 0, 10)).printList();

let dListMdOrder = new DoublyLinkedList;
dListMdOrder.insertLastFromArray(orderedArray(10, 1)).printList();

let dListMdRandom = new DoublyLinkedList;
dListMdRandom.insertLastFromArray(randomArray(10, 0, 1));

let dListLgOrder = new DoublyLinkedList;
dListLgOrder.insertLastFromArray(orderedArray(25, 1));

let dListLgRandom = new DoublyLinkedList;
dListLgRandom.insertLastFromArray(randomArray(25, 0, 99));

module.exports = {
    dListSmOrder, dListSmRandom, dListMdOrder, dListMdRandom, dListLgOrder, dListLgRandom
}