var chai    = require("chai"),
    expect  = chai.expect; // preference and tested with expect

const { LinkedList }    = require('../src/singlyLinkedList');
const samples           = require('../src/samples');
const { assert } = require("chai");

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


describe('linked list samples', () => {
    
    describe('create list', () => {
        for (const list in samples) {
            it(`${list}`, () => {
                expect(samples[list]).to.be.instanceOf(LinkedList);
            })
        }
    })
    
    describe('sized properly', () => {
        it('small lists', () => {
           assert.isAtLeast(samples.listSmOrder.length, 3);
           assert.isBelow(samples.listSmOrder.length, 6);
        })
        it('medium lists', () => {
            assert.isAtLeast(samples.listMdOrder.length, 10);
            assert.isBelow(samples.listMdOrder.length, 20);
        })
        it('large lists', () => {
            assert.isAtLeast(samples.listLgOrder.length, 25);
            assert.isBelow(samples.listLgOrder.length, 40);
        })
    })

    describe('ordered lists', () => {
        const lists = {
            listSmOrder: samples.listSmOrder,
            listMdOrder: samples.listMdOrder,
            listLgOrder: samples.listLgOrder
        }

        describe('is ordered(ascending)', () => { 
            for (const listId in lists) {
                it(`${listId}`, () => {
                    expect(isOrdered(lists[listId])).to.be.true;
                })
            }    
        })

    })
    
})

