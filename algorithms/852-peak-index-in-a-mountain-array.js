const assert = require('assert');

/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = (A) => {
    return A.findIndex( (value, index) => {
        return value > A[index+1]
    });
};


assert.equal(peakIndexInMountainArray([0,1,0]), 1);
assert.equal(peakIndexInMountainArray([0,2,1,0]), 1);
assert.equal(peakIndexInMountainArray([0,1,2,3,4,3,2]), 4);