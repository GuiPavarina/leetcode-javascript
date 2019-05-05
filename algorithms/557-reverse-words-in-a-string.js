/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * 
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    const result = s.split(' ').map( word => [...word].reverse().join('') ).join(' ');
    return result;
};

reverseWords("Let's take LeetCode contest");
reverseWords('Given a string, you need to reverse');
reverseWords('singleword');

