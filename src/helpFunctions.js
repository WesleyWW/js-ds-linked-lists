/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} random number between min and max
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = {
    /**
     * 
     * @param {number} size 
     * @param {number} minInt 
     * @param {number} maxInt 
     * @returns {Array} of non-repeating integers if size permits
     */
    randomArray(size, minInt, maxInt) {
        let outputArray = new Array(size)
        let usedNums = {}
        for (let i = 0; i < size; i++) {
            let num = randomNum(minInt, maxInt)
            if (maxInt - minInt >= size) {
                while (usedNums[num]) num = randomNum(minInt, maxInt)
            }
            outputArray[i] = num;
            usedNums[num] = true;
        }
        return outputArray;
    },
    /**
     * 
     * @param {number} size 
     * @param {number} startInt 
     * @returns {Array} of integers - ordered starting from starInt
     */
    orderedArray(size, startInt) {
        let outputArray = new Array(size)
        let num = startInt;
        for (let i = 0; i < size; i++) {
            outputArray[i] = num;
            num++
        }
        return outputArray;
    },

    /**
     * 
     * @param {LinkedList} list 
     * @param {number} loopNodeIndex 
     * @returns {LinkedList}
     */
    makeLoop(list, loopNodeIndex) {
        //staying in bounds
        if (list.length < 3 || list.length <= loopNodeIndex) { 
            //just use a doubly linked list
            return list;
        }
        
        let current = list.head;
        let index = 0;
        
        while (index < loopNodeIndex) {
            current = current.next;
            index++
        }
        list.tail.next = current;
        return list;
    }
}