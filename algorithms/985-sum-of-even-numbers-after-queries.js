/**
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 * 
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = (A, queries) => {
    return queries.map(el => {
        A[el[1]] = A[el[1]] + el[0];

        let result = 0;
        for(let i = 0 ; i < A.length; i++) {
            if( A[i] % 2 == 0)
                result += A[i];
        }
        return result;    
    });
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));
console.log(sumEvenAfterQueries([1], [[4,0]]));
console.log(sumEvenAfterQueries([3,2], [[4,0],[3,0]]));
console.log(sumEvenAfterQueries([5,1], [[0,1],[4,0]]));

