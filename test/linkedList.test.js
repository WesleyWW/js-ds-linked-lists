const { expect, assert } = require('chai');
const { Node } = require('../src/listNodes');
const { LinkedList } = require('../src/singlyLinkedList');


describe('Node test', () => {
    const node = new Node(3);

    it('is node', ()=> {
        expect(node).to.be.instanceOf(Node);
        assert.isNumber(node.value);
    })
})

describe('singly linked list test', () => {
    const emptyList = new LinkedList;
    const linkedList = new LinkedList;

    describe('.insertLast()', () => {
        it('insert a node at the end', () => {
            expect(linkedList.insertLast()).to.be.instanceOf(LinkedList);
            expect(linkedList.insertLast(2)).to.be.instanceOf(LinkedList);
            expect(linkedList.insertLast(1)).to.be.instanceOf(LinkedList);
        })
    })

    describe('.insertFirst()', () => {
        it('insert a node at the front', () => {
            expect(linkedList.insertFirst()).to.be.instanceOf(LinkedList);
            expect(linkedList.insertFirst(3)).to.be.instanceOf(LinkedList);
            expect(linkedList.insertFirst(4)).to.be.instanceOf(LinkedList);
        })
    })

    describe('.insertLastFromArray()', () => {
        it('insert nodes to the end from an array', () => {
            expect(linkedList.insertLastFromArray([1, 2, 4, 5])).to.be.instanceOf(LinkedList);
            expect(linkedList.insertLastFromArray([])).to.be.instanceOf(LinkedList);
        })
    })

    describe('isEmptyList()', () => {
        it('check for empty list', () => {
            expect(linkedList.insertLast(1).isEmptyList()).to.equal(false);
            expect(emptyList.isEmptyList()).to.equal(true);
        })
    })
    
    // describe('printList()', () => {
    //     it('print the list', () => {
    //         expect(linkedList.printList()).to.be.instanceOf(LinkedList);
    //     })
    // })
})