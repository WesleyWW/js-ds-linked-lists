const { expect, assert } = require('chai');
const { DoublyLinkedList } = require('../src/doublyLinkedLists');

describe('doubly linked list test', () => {
    const emptyList = new DoublyLinkedList;
    const dList = new DoublyLinkedList;

    describe('.insertFirst()', () => {
        it('insert a node in front', () => {
            expect(dList.insertFirst(2)).to.be.instanceOf(DoublyLinkedList);
            expect(dList.insertFirst(1)).to.be.instanceOf(DoublyLinkedList);
            expect(dList.insertFirst()).to.be.instanceOf(DoublyLinkedList);
            expect(dList.length).to.equal(2);
        })
    })

    describe('.insertLast()', () => {
        it('insert a node in back', () => {
            expect(dList.insertLast(3)).to.be.instanceOf(DoublyLinkedList);
            expect(dList.insertLast(4)).to.be.instanceOf(DoublyLinkedList);
            expect(dList.insertLast()).to.be.instanceOf(DoublyLinkedList);
            expect(dList.length).to.equal(4);
        })
    })

    describe('.insertLastFromArray()', () => {
        it('insert nodes to the end from an array', () => {
            expect(dList.insertLastFromArray([1, 2, 4, 5])).to.be.instanceOf(DoublyLinkedList);
            expect(dList.insertLastFromArray([])).to.be.instanceOf(DoublyLinkedList);
        })
    })

    describe('isEmptyList()', () => {
        it('check for empty list', () => {
            expect(dList.insertLast(1).isEmptyList()).to.equal(false);
            expect(emptyList.isEmptyList()).to.equal(true);
        })
    })
})