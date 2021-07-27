const {DoubleNode} = require('./listNodes');
/**
 * 
 * @class
 */
class DoublyLinkedList {
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    /**
     * Check if the list is empty
     * @public
     * @returns {boolean}
     */
    isEmptyList() {
        return this.head === null;
    }

    /**
     * Add a node to the front of the list
     * @param {number} value 
     * @returns {DoublyLinkedList}
     */
    insertFirst(value) {
        if (value === null || value === undefined) {
            console.log("No Value Added");
            return this;
        } 

        let node = new DoubleNode(value);

        if (this.isEmptyList()) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            return this;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    /**
     * Add a node to the end of the list
     * @public
     * @param {number} value 
     * @returns {LinkedList}
     */
    insertLast(value) {
        if (value === null || value === undefined) {
            console.log("No Value Added");
            return this;
        }

        let node = new DoubleNode(value);

        if (this.isEmptyList()) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            return this;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
        return this;
    }

    /**
     * Add values to the end from an array
     * @public
     * @param {array(number)} array 
     * @returns {LinkedList}
     */
     insertLastFromArray(array) {
        array.map( val => this.insertLast(val) );
        return this;
    }

     /**
     * Print list for human reading
     * @public
     * @returns {DoublyLinkedList}
     */
    printList() {
        if (this.length === 0) return null;

        let current = this.head;
        let output = 'null <-(head)';
        while (current !== null) {

            output += ` ${current.value} <-->`;
            current = current.next;
        }
        output = output.slice(0, -4)
        output += '(tail) -> null';
        console.log(output);
        return this;
    }
}

module.exports = { DoublyLinkedList };