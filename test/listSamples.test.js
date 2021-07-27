var chai    = require("chai"),
    expect  = chai.expect; // preference and tested with expect

var { assert }          = require("chai");
const { LinkedList }    = require('../src/singlyLinkedList');
const { DoublyLinkedList } = require('../src/doublyLinkedLists');
const listSamples           = require('../src/listSamples');
const dListSamples           = require('../src/dListSamples');

function isOrdered(list) {
    let isOrdered = false;
    let prevNode = list.head
    let currentNode = prevNode.next;

    while (currentNode) {
        isOrdered = prevNode.value <= currentNode.value;
        if (!isOrdered) return false;
        currentNode = currentNode.next;
    }

    return true;
}


describe('linked list listSamples', () => {
    
    describe('create list', () => {
        for (const list in listSamples) {
            it(`${list}`, () => {
                expect(listSamples[list]).to.be.instanceOf(LinkedList);
            })
        }
    })
    
    describe('sized properly', () => {
        it('small lists', () => {
           assert.isAtLeast(listSamples.listSmOrder.length, 3);
           assert.isBelow(listSamples.listSmOrder.length, 6);
        })
        it('medium lists', () => {
            assert.isAtLeast(listSamples.listMdOrder.length, 10);
            assert.isBelow(listSamples.listMdOrder.length, 20);
        })
        it('large lists', () => {
            assert.isAtLeast(listSamples.listLgOrder.length, 25);
            assert.isBelow(listSamples.listLgOrder.length, 40);
        })
    })

    describe('ordered lists(ascending)', () => {
        const lists = {
            listSmOrder: listSamples.listSmOrder,
            listMdOrder: listSamples.listMdOrder,
            listLgOrder: listSamples.listLgOrder
        }
        
        for (const listId in lists) {
            it(`${listId}`, () => {
                expect(isOrdered(lists[listId])).to.be.true;
            })
        }    
    })
})

describe('double linked lists', () => {

    describe('create list', () => {
        for (const list in dListSamples) {
            it(`${list}`, () => {
                expect(dListSamples[list]).to.be.instanceOf(DoublyLinkedList);
            })
        }
    })
    
    describe('sized properly', () => {
        it('small lists', () => {
           assert.isAtLeast(dListSamples.dListSmOrder.length, 3);
           assert.isBelow(dListSamples.dListSmOrder.length, 6);
        })
        it('medium lists', () => {
            assert.isAtLeast(dListSamples.dListMdOrder.length, 10);
            assert.isBelow(dListSamples.dListMdOrder.length, 20);
        })
        it('large lists', () => {
            assert.isAtLeast(dListSamples.dListLgOrder.length, 25);
            assert.isBelow(dListSamples.dListLgOrder.length, 40);
        })
    })

    describe('ordered lists(ascending)', () => {
        const lists = {
            dListSmOrder: dListSamples.dListSmOrder,
            dListMdOrder: dListSamples.dListMdOrder,
            dListLgOrder: dListSamples.dListLgOrder
        }
       
        for (const listId in lists) {
            it(`${listId}`, () => {
                expect(isOrdered(lists[listId])).to.be.true;
            })
        }    

    })
})

