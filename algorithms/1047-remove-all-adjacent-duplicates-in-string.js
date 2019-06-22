/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * 
 * Solution 1, using arrays
 * Perfomance was not good
 * time: 720 ms
 * memory: 42.2 mb
 * 
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = (S) => {
    let arr = [...S];
    let index = find(arr);
    while(index !== -1) {
        arr.splice(index, 2);
        index = find(arr);
    }
    return arr.join("");
};

const find = (arr) => arr.findIndex((el, index) => el === arr[index + 1]);

// --------------------------------------------------------------

/**
 * Solution 2 using REGEX instead of arrays
 * Better perfomance than the other solution
 * time on leet code: 68 ms 
 * memory: 36.7 mb 
 * 
 * @param {*} S 
 */
const solution2 = (S) => {
    const regex = /(\w)\1{1}/g;
    let newStr = S.replace(regex, "");
    let oldStr = "";
    while(newStr !== oldStr) {
        oldStr = newStr;
        newStr = oldStr.replace(regex, "");
    }
    return newStr;
}

// ------------------------------------------

solution2("abbacca");
solution2("abcdeffedcba");
solution2("sadvasascsadasdff");

removeDuplicates("abbaca");
removeDuplicates("abcdeffedcba");
removeDuplicates("sadvasascsadasdff");