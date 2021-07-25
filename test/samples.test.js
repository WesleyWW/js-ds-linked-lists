var chai    = require("chai"),
    expect  = chai.expect; // preference and tested with expect

const { LinkedList }    = require('../src/singlyLinkedList');
const samples           = require('../src/samples');

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

    describe('ordered lists', () => {
        const lists = {
            listSmOrder: samples.listSmOrder,
            listMdOrder: samples.listMdOrder,
            listLgOrder: samples.listLgOrder
        }

        describe('is ordered', () => { 
            for (const list in lists) {
                it(`${list}`, () => {
                    expect(isOrdered(lists[list])).to.be.true;
                })
            }    
        })

    })
})

