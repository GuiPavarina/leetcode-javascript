
class Binary {

    constructor () {
        this.arr = [];
        this.fill();
    }

    fill() {
        for(let i = 0 ; i <= 30 ; i++) {
            this.arr.push(Math.pow(2, i));
        }
    }

    numToBin(x) {
        let result = "";
        for(let index = 30 ; index >= 0; index-- ) {
            if(x >= this.arr[index]) {
                x = x - this.arr[index];
                result = result + "1";
            } else
                result = result + "0";
        }
        return result;
    }

}

/**
 * 
 * Returns the number of different chars
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
const compare = (s1, s2) => {
    let diffs = 0;
    for(let i = 0 ; i < s1.length ; i++ ) {
        if(s1[i] !== s2[i]) {
            diffs++
        }
    }
    return diffs;
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    const binary = new Binary();

    const binX = binary.numToBin(x);
    const binY = binary.numToBin(y);
    
    // for test purposes
    // console.log(`------------------------`);
    // console.log(`${x} to bin: ${binX}`);
    // console.log(`${y} to bin: ${binY}`);
    // console.log('num of diffs ', compare(binX, binY));
    // console.log(`------------------------`);

    return compare(binX, binY);

};

hammingDistance(1, 4);
hammingDistance(1, 1);
hammingDistance(4, 4);
hammingDistance(16, 1);
hammingDistance(32, 16);
hammingDistance(197, 1);
hammingDistance(2147483647, 0);
hammingDistance(0, 0);
hammingDistance(2147483647, 2147483647);