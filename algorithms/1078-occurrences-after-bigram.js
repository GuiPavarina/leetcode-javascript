const assert = require('assert');

/**
 * https://leetcode.com/problems/occurrences-after-bigram/
 * 
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {

    const result = []

    const words = first + " " + second;

    while(text.indexOf(words) != -1) {

        let match = text.match(new RegExp("(?<=\\s|^)" + words + "(?=\\s|$)"));

        let aux = text.substr(match.index + words.length).match(/\w+/);
        
        if(aux !== null )
            result.push(aux[0]);
            
        text = text.substr(match.index + words.length)
        
    }

    return result;
    
};

assert.deepEqual(findOcurrences("alice is a good girl she is a good student","a","good"),["girl","student"]);
assert.deepEqual(findOcurrences("we will we will rock you","we","will"),["we","rock"]);
assert.deepEqual(findOcurrences("alice is aa good girl she is a good student","a","good"),["student"]);

const text = "ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk"
const f = "lnlqhmaohv"
const s = "ypkk"

assert.deepEqual(findOcurrences(text, f, s), ['ypkk', 'ypkk'])