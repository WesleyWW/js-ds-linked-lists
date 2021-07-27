const { Node }              = require('./listNodes');
const { LinkedList }        = require('./singlyLinkedList');

const {
    randomArray,
    orderedArray }          = require('./helpFunctions');

/* example of create your own method */
function insertNode(node) {
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
}

/*SINGLY LINKED LIST SAMPLES */

let listSmOrder = new LinkedList;
listSmOrder.insertLastFromArray([1, 2, 3]);
/* created method in action */
// listSmOrder.insertNode = insertNode;
// listSmOrder.insertNode(new Node(4)).printList();

let listSmRandom = new LinkedList;
listSmRandom.insertLastFromArray(randomArray(3, 0, 10));

let listMdOrder = new LinkedList;
listMdOrder.insertLastFromArray(orderedArray(10, 1));

let listMdRandom = new LinkedList;
listMdRandom.insertLastFromArray(randomArray(10, 0, 1));

let listLgOrder = new LinkedList;
listLgOrder.insertLastFromArray(orderedArray(25, 1));

let listLgRandom = new LinkedList;
listLgRandom.insertLastFromArray(randomArray(25, 0, 99));


module.exports = {
    listSmOrder, listSmRandom, listMdOrder, listMdRandom, listLgOrder, listLgRandom,
}