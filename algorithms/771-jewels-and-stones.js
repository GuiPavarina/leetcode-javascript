/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones1 = function(J, S) {
    const jewels = [...S];
    let numberOfJewels = 0;

    jewels.forEach( (el) => {
        let matches = J.match(el);
        numberOfJewels += ( matches !== null ) ? matches.length : 0;
    });
    
    return numberOfJewels;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jewels = [...J];
    let numberOfJewels = 0;

    jewels.forEach( (el) => {
        const regex = new RegExp(el, 'g');
        let matches = S.match(regex);
        numberOfJewels += ( matches !== null ) ? matches.length : 0;
        S = S.replace(regex, '');
    });

    return numberOfJewels;
};

console.log(numJewelsInStones("aA", "aAAbbbbb") === 3);
console.log(numJewelsInStones("b", "bbbbbb") === 6);
console.log(numJewelsInStones("aAB", "aaaAAABBBbbb") === 9);
console.log(numJewelsInStones("z", "ZZ") === 0);
console.log(numJewelsInStones("z", "z") === 1);
console.log(numJewelsInStones("z", "zzzzzzzzzzzzzzz") === 15);
