const {Node} = require('./listNodes');

/**
 * Every method returns a {LinkedList} to allow methods to be strung together i.e. list.insertLast(2).insertLast(4).printList()
 * Exceptions are made for any method specifically wanted something other than a {LinkedList} in return
 * @class
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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
     * @public
     * @param {number} value 
     * @returns {LinkedList}
     */
    insertFirst(value) {
        if (value === null || value === undefined) return this; 
        
        let node = new Node(value);
        
        if (this.isEmptyList()) {
            this.head = node;
            this.tail = node;
            this.length = 1;
        }

        node.next = this.head;
        this.head = node;
        this.length++
        return this;
    }
    
    /**
     * Add a node to the end of the list
     * @public
     * @param {number} value 
     * @returns {LinkedList}
     */
    insertLast(value) {
        if (value === null || value === undefined) return this; 

        let node = new Node(value);

        if (this.isEmptyList()) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    /**
     * Add values to the end from an array
     * @public
     * @param {any} array 
     * @returns {LinkedList}
     */
     insertLastFromArray(array) {
        array.map( val => this.insertLast(val) );
        return this;
    }

    /**
     * Print list for human reading
     * @public
     * @returns {LinkedList}
     */
    printList() {
        if (this.length === 0) return null;

        let current = this.head;
        let output = '';
        while (current !== null) {
            output += `${current.value} -> `;
            current = current.next;

            if (this.tail.next !== null && current === this.tail) {
                output += '[Loop] -> '+current.next.value;
                console.log(output);
                return this;
            }
        }
        output += 'null';
        console.log(output);
        return this;
    }
}

module.exports = {LinkedList};