/**
 * https://leetcode.com/problems/keyboard-row/
 * 
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
    return words.filter( (el) => {
        const word = el.toLowerCase();
        if(checkRows(word)) {
            return word;
        }
    });
};

const checkRows = (word) => isUsingOneRow(word, row1) || isUsingOneRow(word, row2) || isUsingOneRow(word, row3);

const isUsingOneRow = (word, row) => [...word].every( el => row.indexOf(el) !== -1 );

const row1 = [..."qwertyuiop"];
const row2 = [..."asdfghjkl"];
const row3 = [..."zxcvbnm"];

findWords(["Hello", "Alaska", "Dad", "Guilherme", "zxcvbnma", "zxcvbnm", "a", "az"]);
