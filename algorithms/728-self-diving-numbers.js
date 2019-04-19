/**
 * 
 * https://leetcode.com/problems/self-dividing-numbers/
 * 
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    const results = [];
    for(let i = left ; i <= right ; i++) {
        let flag = true;
        [...i.toString()].forEach( (char) => {
            if( i % parseInt(char) !== 0 )
                flag = false;
        });
        if(flag)
            results.push(i);
    }
    return results;
};

selfDividingNumbers(1, 10000);
