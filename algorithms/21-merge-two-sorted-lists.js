const assert = require('assert');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
   
    const list = new LinkedList();

    if(checkCondition(l1))
        return l2;

    if(checkCondition(l2))
        return l1;

    while( true ) {
        if((l2 === null) || (l1 != null && l1.val <= l2.val) ) {
            list.add(l1.val);
            l1 = l1.next;
        } else {
            list.add(l2.val);
            l2 = l2.next;
        }

        if( l1 === null && l2 === null)
            break;
    }
    
    return list.get();
};

const checkCondition = (listNode) => {
    return listNode === undefined || listNode === null || Object.keys(listNode).length === 0;
}

class LinkedList {

    constructor() {
        this.list = {};
    }

    add(value) {      
        if(this.list.next === undefined) {
            this.list = {
                val: value,
                next: null
            }
        } else {
            let aux = this.list;
            while(true) {
                if(aux.next === null)
                    break;
                aux = aux.next;
            }
            aux.next = {
                val: value,
                next: null
            }
        }
    }

    get() {
        return this.list;
    }

}

const LIST_1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    } 
}

const LIST_2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    } 
}

const LIST_3 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    } 
}

const LIST_4 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 7,
            next: {
                val: 8,
                next: null
            }
        }
    } 
}

mergeTwoLists(LIST_1, LIST_2);
mergeTwoLists(LIST_3, LIST_4);
mergeTwoLists({}, {});
mergeTwoLists(LIST_1, {});
mergeTwoLists(
    {
        val: 2,
        next: null
    }, {
        val: 1,
        next: null
});
