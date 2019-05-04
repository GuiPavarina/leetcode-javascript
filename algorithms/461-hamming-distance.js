/**
 * 
 * Returns the number of different chars
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
const compare = (s1, s2) => {
    if(s1.length > s2.length)
        s2 = padding(s2, s1.length - s2.length);
    else
        s1 = padding(s1, s2.length - s1.length);

    let diffs = 0;
    [...s1].forEach( (el, i) => {
        if(el !== s2[i]) {
            diffs++;
        }
    });
        
    return diffs;
}

const padding = (s1, num) => "0".repeat(num) + s1;

/**
 * 
 * https://leetcode.com/problems/hamming-distance/
 * 
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
        
    const binX = x.toString(2);
    const binY = y.toString(2);

    // for test purposes
    // console.log(`------------------------`);
    // console.log(`${x} to bin: ${binX}`);
    // console.log(`${y} to bin: ${binY}`);
    // console.log('num of diffs ', compare(binX, binY));
    // console.log(`------------------------`);

    return compare(binX, binY);

};

hammingDistance(1, 4);
hammingDistance(1, 1);
hammingDistance(4, 4);
hammingDistance(16, 1);
hammingDistance(32, 16);
hammingDistance(197, 1);
hammingDistance(2147483647, 0);
hammingDistance(0, 0);
hammingDistance(2147483647, 2147483647);
