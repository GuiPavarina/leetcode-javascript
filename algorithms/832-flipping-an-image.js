/**
 * 
 * https://leetcode.com/problems/flipping-an-image/
 * 
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {

    A.forEach( (el, i) => {
        A[i] = el.reverse();
        A[i].forEach( (item, index) => {
            A[i][index] = ( item === 1) ? 0 : 1;
        });
    });
    return A;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));