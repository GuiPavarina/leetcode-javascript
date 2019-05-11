/**
 * https://leetcode.com/problems/leaf-similar-trees/
 * 
 * Definition for a binary tree node.
 * function (val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {} root1
 * @param {} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {

    const arr1 = getValues(root1, []);
    const arr2 = getValues(root2, []);

    return arr1.every( (el,i) => el === arr2[i] );
};

const getValues = (tree, arr) => {
    if(tree.left === null && tree.right === null)
        arr.push(tree.val);

    if (tree.left !== null)
        arr = getValues(tree.left, arr)
    if (tree.right !== null)
        arr = getValues(tree.right, arr)
    
    return arr;
}

const root1 = {
  val: 3,
  right: {
    val: 1,
    right: {
      val: 8,
      right: null,
      left: null
    },
    left: {
      val: 9,
      right: null,
      left: null
    }
  },
  left: {
    val: 5,
    right: { 
        val: 2, 
        right: {
            val: 4,
            right: null,
            left: null
        },
        left: {
            val: 7,
            right: null,
            left: null
        },
    },
    left: {
      val: 6,
      right: null,
      left: null
    }
  }
};

const root2 = {
  val: 3,
  right: {
    val: 1,
    right: { 
        val: 2, 
        right: {
            val: 4,
            right: null,
            left: null
        },
        left: {
            val: 7,
            right: null,
            left: null
        },
    },
    left: { 
        val: 4, 
        right: null, 
        left: null
    }
  },
  left: {
    val: 5,
    right: { 
        val: 7, 
        right: null, 
        left: null 
    },
    left: { 
        val: 6, 
        right: null, 
        left: null 
    }
  }
};

leafSimilar(root1, root2);
