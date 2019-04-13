/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    const result = [];
    A.forEach( (el) => {
        if( el % 2 === 0)
            result.unshift(el)
        else
            result.push(el);
    });
    return result;

};

console.log(sortArrayByParity([3,1,2,4]));
console.log(sortArrayByParity([3,1,5,2,4]))
