/**
 * https://leetcode.com/problems/number-complement/
 * 
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {

    // better perfomance

    const bin = num.toString(2);
    const length = bin.length - 1;
    const result = [...bin].reduce( (acc, el, index) => {
        if( el === "0")
            return acc + Math.pow(2, length - index);
        return acc;
    }, 0);
    return result;
};

// first idea, perfomance is not so good :(
//
// const findComplement = (num) => {
//     const bin = num.toString(2);
//     const flipped = [...bin].map( el => (el === "1") ? "0" : "1" );
//     return parseInt(flipped.join(''), 2);
// };

findComplement(5);
findComplement(1);
findComplement(10);
findComplement(2);
