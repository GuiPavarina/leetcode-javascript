/**
 * 
 * https://leetcode.com/problems/flipping-an-image/
 * 
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map( (el) => el.reverse().map( val => val === 1 ? 0 : 1 ) );
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));