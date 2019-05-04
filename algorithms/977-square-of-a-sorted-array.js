/**
 * 
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = (A) => {
    return A
        .map( el => Math.pow(el, 2))
        .sort( (v1, v2) => v1 - v2);
};

// test cases
console.log(sortedSquares([-4,-1,0,3,5,10]));
console.log(sortedSquares([-1,0,3]));
console.log(sortedSquares([-11,-10,-4,-1,0,3,5,6,7,10]));
console.log(sortedSquares([-1]));
console.log(sortedSquares([-1,2,2]))
