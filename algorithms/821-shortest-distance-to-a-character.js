/**
 * https://leetcode.com/problems/shortest-distance-to-a-character/
 * 
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (S, C) => {

    const arr = [...S];
    const result = arr.map( (el, i) => {
        
        const next = findNext(arr, i, C);
        const last = findLast(arr, i, C);

        if( last === -1 )
            return next;
        else if ( (next === -1) || ((i - last) < next) ) {
            return (i-last);
        } else {
            return next;
        }

    });
    
    return result;
};

const findNext = (arr, i, c) => arr.slice(i).indexOf(c);

const findLast = (arr, i, c) => arr.slice(0, i).lastIndexOf(c);

shortestToChar('loveleetcode','e');
shortestToChar('aacbbcaacbb','c');
shortestToChar('guilherme','g');
shortestToChar('guuuuuuuuuuuuuuuuuuuuuug','g');
shortestToChar('guuuuuuuuuuguuuuuuuuuuug','g');
shortestToChar('uuuuuuuuuuuuuuguuuuuuuuuuuuuu','g');
shortestToChar('ggggggggggggggggggggggggg','g');

// to help debugging
// console.log('index' ,i ,'next' ,findNext(indexes, i, C), 'last' ,findLast(indexes, i, C));