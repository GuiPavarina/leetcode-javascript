/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A.sort();
    for(let i = 0 ; i < A.length ; i++) {
        if(A[i] === A[i + 1])
            return A[i];
    }   
};

console.log(repeatedNTimes([1,2,3,3]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
