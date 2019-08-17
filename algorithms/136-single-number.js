const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    return nums.filter( (value, index) => {
        const lastIndex = nums.lastIndexOf(value);
        if(lastIndex == index && value !== 'X')
            return value == 0 ? '0' : value ;
        else if(lastIndex !== index) {
            nums[lastIndex] = 'X';
        }
    })[0];
};

assert.equal(singleNumber([2,2,1]), 1);
assert.equal(singleNumber([4,1,2,1,2]), 4);
assert.equal(singleNumber([2,1,2,1,4]), 4);
assert.equal(singleNumber([1]), 1);
assert.equal(singleNumber([1]), 1);
assert.equal(singleNumber([1]), 1);
assert.equal(singleNumber([1,2,2]), 1);
assert.equal(singleNumber([5,6,7,6,5]), 7);
assert.equal(singleNumber([1,0,1]), 0)
