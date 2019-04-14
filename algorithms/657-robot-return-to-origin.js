/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    let axisX = 0;
    let axisY = 0;

    [...moves].forEach( (el) => {
        if( el === 'U')
            axisY++;
        else if( el === 'D')
            axisY--;
        else if( el === 'R')
            axisX++;
        else if( el === 'L')
            axisX--;
    });

    return (axisX === 0 && axisY === 0);
};

// test cases
console.log(judgeCircle("UD")); //true
console.log(judgeCircle("LR")); //true
console.log(judgeCircle("LL")); //false
console.log(judgeCircle("UDLRU")); //false
