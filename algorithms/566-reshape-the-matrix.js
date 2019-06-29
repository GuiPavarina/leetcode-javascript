/**
 * https://leetcode.com/problems/reshape-the-matrix/
 * 
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
    
    // check if reshape is possible
    if( (r * c) !== matrixElements(nums))
        return nums;

    const allValues = nums.reduce( (values, value) => values.concat(value), []);

    let aux = [];
    const result = allValues.reduce( (values, value, index) => {
        
        aux.push(value);

        if( (index + 1) % c === 0 ){
            values.push(aux);
            aux = []
        }

        return values;
    }, []);

    return result;
};

const matrixElements = matrix => matrix.reduce((accumulator, current) => current.length + accumulator, 0);

// possible
matrixReshape([[1,2],[3,4]], 1, 4);
matrixReshape([[1,2],[3,4]], 4, 1);
matrixReshape([[1,2],[3,4],[5,6],[7,8]], 2, 4);

// not possible
matrixReshape([[1,2],[3,4]], 2, 4);
