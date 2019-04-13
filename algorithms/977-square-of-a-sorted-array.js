/**
 * 
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    A.forEach( (el, i) => {
        A[i] = Math.pow(el,2);
    });

    return A.sort( (v1, v2) => {
        return v1 - v2;
    });
};

// test cases
console.log(sortedSquares([-4,-1,0,3,5,10]));
console.log(sortedSquares([-1,0,3]));
console.log(sortedSquares([-11,-10,-4,-1,0,3,5,6,7,10]));
console.log(sortedSquares([-1]));
console.log(sortedSquares([-1,2,2]))
