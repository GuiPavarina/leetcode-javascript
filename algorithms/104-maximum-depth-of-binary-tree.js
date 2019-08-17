const assert = require('assert');

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {

    if(root === null || root.left === undefined && root.right === undefined) {
        return 0;
    }
    return Math.max(...getLevels(root, 1, []));
    
};

const getLevels = (tree, levels, arr) => {

    if(tree.left === null && tree.right === null) {
        arr.push(levels);
    }

    levels++;
    if(tree.right !== null) {
        getLevels(tree.right, levels, arr);
    } 
    if(tree.left !== null) {
        getLevels(tree.left, levels, arr);
    }
    levels--;

    return arr;
}

const SMALL_TREE = {
    val: 2,
    right:
    {
        val: 3,
        right: { 
            val: 7,
            right: null,
            left: null
        },
        left: null
    },
    left:
    {
        val: 1,
        right: {
            val: 4,
            right: null,
            left: null
        },
        left: null
    }
};

const BIG_TREE = {
    val: 2,
    right:
    {
        val: 3,
        right: { 
            val: 7,
            right: null,
            left: {
                val: 11,
                right: { 
                    val: 12,
                    right: null,
                    left: null
                },
                left: null
            }
        },
        left: null
    },
    left:
    {
        val: 1,
        right: {
            val: 4,
            right: null,
            left: null
        },
        left: null
    }
};

const ONE_LEVEL_TREE = {
    val: 0,
    right: null,
    left: null
}

assert.equal(maxDepth(SMALL_TREE), 3);
assert.equal(maxDepth(BIG_TREE), 5);
assert.equal(maxDepth(ONE_LEVEL_TREE), 1);
assert.equal(maxDepth([]), 0);
assert.equal(maxDepth({}), 0);
assert.equal(maxDepth(null), 0);
