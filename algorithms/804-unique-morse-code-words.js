
class MorseCode {

    constructor () {
        this.arr = [...'abcdefghijklmnopqrstuvwxyz'];
        this.morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....",
            "..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
            "..-","...-",".--","-..-","-.--","--.."];
        this.knowWords = [];
        this.fill();
    }

    fill() {
        this.arr.forEach( (el, index) => {
            this.arr[el] = this.morseCodes[index];
        });
    }

    getMorseCode(char) {
        return this.arr[char];
    }

    wordToMorseCode(word) {
        let result = "";
        if (this.knowWords.indexOf(word) !== -1)
            return this.knowWords[word];
        [...word].forEach((el) => {
            result += this.getMorseCode(el);
        });
        this.knowWords[word] = result;
        return result;
    }

}

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    const morseCode = new MorseCode();
    
    let result = [];
    words.forEach( (el) => {
        const word = morseCode.wordToMorseCode(el);
        if (result.indexOf(word) === -1)
            result.push(word);
    });

    return result.length;

};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]) === 2);

