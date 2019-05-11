/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    const arr = getListDetails(head);
    const half = Math.floor(arr.length / 2);
    return arr[half];
};

/**
 * 
 * @param {*} linkedList 
 * @return {length, arr}
 */
const getListDetails = (linkedList) => {
    let arr = [];
    let obj = linkedList;

    while(obj !== null) {
        arr.push(obj);
        obj = obj.next;
    }

    return arr;
}

//----------------------
// Solution number 2
//----------------------
// const middleNode = (head) => {
//     const length = getListLength(head);
//     const half = Math.floor(length / 2);
//     return sliceList(head, half);
// };

// const sliceList = (linkedList, index) => {
//     let obj = linkedList;
//     let x = 0;
//     while ( x < index) {
//         obj = obj.next;
//         x++;
//     }
//     return obj;
// }

// const getListLength = (linkedList) => {
//     let result = 0;
//     let obj = linkedList;
//     while(obj !== null) {
//         result++;
//         obj = obj.next;
//     }
//     return result;
// }

const headEven = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const headOdd = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
}

middleNode(headEven);
middleNode(headOdd);
