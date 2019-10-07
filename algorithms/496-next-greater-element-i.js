const assert = require('assert');

/**
 * https://leetcode.com/problems/next-greater-element-i/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {

    // position of nums1's elements at nums2
    const positions = nums1.map( el => nums2.indexOf(el));

    let greaterNumber = null;
    return nums1.map((num1, index) => {

        greaterNumber = nums2.slice(positions[index], nums2.length)
            .find(num2 => num2 > num1 );

        return greaterNumber ? greaterNumber : -1;
    });

};

assert.deepEqual(nextGreaterElement([4,1,2], [1,3,4,2]), [-1,3,-1]);
assert.deepEqual(nextGreaterElement([2,4], [1,2,3,4]), [3,-1]);
assert.deepEqual(nextGreaterElement([], []), []);
assert.deepEqual(nextGreaterElement([0, 1], [0, 1, 2]), [1, 2]);
assert.deepEqual(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]), [7,7,7,7,7]);
