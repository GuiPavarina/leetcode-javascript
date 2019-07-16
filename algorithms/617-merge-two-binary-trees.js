/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {

    if( (t1 === undefined && t2 === undefined) || (t1 === null && t2 === null) )
        return null;

    return getValues(t1, t2, {});
};

const getValues = (t1, t2, obj) => {

    t1 = createObjIfNull(t1);
    t2 = createObjIfNull(t2);

    obj = {
        val: t1.val + t2.val,
        left: null,
        right: null
    }

    if (t1.left !== null || t2.left !== null)
        obj.left = getValues(t1.left, t2.left, obj.left);
    if (t1.right !== null || t2.right !== null)
        obj.right = getValues(t1.right, t2.right, obj.right);

    return obj;
}

/**
 * Creates an empty obj just in case it's null or undefined
 * @param {*} node 
 */
const createObjIfNull = (node) => {
    if( node === null || node === undefined || node.val === undefined )
        return {
            val: 0,
            left: null,
            right: null
        }
    return node;
}

const t1 = {
    val: 1,
    right:
    {
        val: 2,
        right: null,
        left: null
    },
    left:
    {
        val: 3,
        right: null,
        left: {
            val: 5,
            right: null,
            left: null
        }
    }
};

const t2 = {
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


console.log(mergeTrees(t1, t2));
console.log(mergeTrees({}, {}));
console.log(mergeTrees(t1, {}));
console.log(mergeTrees({}, t2));
console.log(mergeTrees(undefined, undefined));
console.log(mergeTrees(null, null));
console.log(mergeTrees());