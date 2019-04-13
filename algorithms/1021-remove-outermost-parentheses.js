/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const arr = [...S];

    for( let index = 0; index < arr.length ; index++ ){
        if(S[index] === '('){
            let num = findClose(arr, index);
            arr.splice(num, 1, '');
            arr.splice(index, 1, '');
            index = num;
        }
    }
    return arr.join('');
};

var findClose = function(s, index) {
    let opened = 0;
    for( let i = index+1; i < s.length ; i++ ) {
        if( s[i] === ')') {
            if( opened === 0)
                return i;
            opened--;
        } else
            opened++;
    }
}

console.log(removeOuterParentheses("(()())(())") === "()()()");
console.log(removeOuterParentheses("(()())(())(()(()))") === "()()()()(())");
console.log(removeOuterParentheses("()()") === "");
console.log(removeOuterParentheses("()") === "");
console.log(removeOuterParentheses("((((((((()()))))))))") === "(((((((()())))))))");
console.log(removeOuterParentheses("((((((((((()))))))))))") === "(((((((((())))))))))");
console.log(removeOuterParentheses("()()()()(((((((((())))))))))()") === "((((((((()))))))))");
