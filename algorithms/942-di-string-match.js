/**
 * https://leetcode.com/problems/di-string-match/submissions/
 * 
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = (S) => {
    const array = Array.from({length: (S.length + 1)}, (v, i) => i);
    const result = [...S].map( (value) => {
        return value === "D" ? array.pop() : array.shift();
    });
    result.push(array.shift());
    return result;
};

diStringMatch("IID")
diStringMatch("DDDD")
diStringMatch("IDID")
diStringMatch("III")
diStringMatch("DDI")
