/**
 * https://leetcode.com/problems/reverse-string/
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    // 108ms
    for(let i = 0; i < (s.length / 2) ; i++ ) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;      
    }

};

// lazy way
// 112ms
// const reverseString = (s) => s.reverse();

reverseString(["h","e","l","l","o"]);
reverseString(["h","e","l","l","o","o"]);
reverseString([..."Guilher"]);
reverseString([..."Guilhe"]);
