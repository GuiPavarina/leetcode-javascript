/**
 * https://leetcode.com/problems/fizz-buzz/
 * 
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    let result = [];
    for( let i = 1 ; i <= n ; i++) {
        if( i % 3 === 0 && i % 5 === 0)
            result.push("FizzBuzz")
        else if ( i % 5 === 0 )
            result.push("Buzz")
        else if ( i % 3 === 0 )
            result.push("Fizz")
        else
            result.push(i.toString())
    }
    //console.log(result);
    return result;
};

fizzBuzz(30)
