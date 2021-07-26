/**
 * @class
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DoubleNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

module.exports = {Node, DoubleNode};