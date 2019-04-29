/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    const total = binaryTree(root,0, L, R);
    return total;
};

const binaryTree = (t, resp, min, max) => {
    resp += (t.val <= max && t.val >= min) ? t.val : 0;
    if(t.left !== null )
        resp = binaryTree(t.left, resp, min, max);
    if(t.right !== null)
        resp = binaryTree(t.right,resp, min, max);
    return resp;
}

const tree = {
    val: 10,
    right: {
       val: 15,
       right: { 
           val: 18, 
           right: null, 
           left: null 
        },
       left: null 
    },
    left:  {
       val: 5,
       right:
        { 
            val: 7, 
            right: null, 
            left: null 
        },
       left: 
        { 
            val: 3,
            right: null,
            left: null 
        } 
    } 
}

const tree2 = {
    val: 10,
    right: {
       val: 15,
       right: { 
           val: 18, 
           right: null, 
           left: null 
        },
       left: { 
        val: 20, 
        right: { 
            val: 18, 
            right: null, 
            left: null 
        },
        left: null 
     }, 
    },
    left:  {
       val: 5,
       right:
        { 
            val: 7, 
            right: null, 
            left: null 
        },
       left: 
        { 
            val: 3,
            right: null,
            left: null 
        } 
    } 
}

rangeSumBST(tree, 7, 15);
rangeSumBST(tree2, 15, 35);
