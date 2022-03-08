/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let answer = true
    
    function DFS(tree, max, min) {
        if(answer === false) return
        
        if(tree.left != null) {
            if(tree.val <= tree.left.val || max <= tree.left.val || min >= tree.left.val) answer = false    
            else DFS(tree.left, tree.val, min)
        }
        
        if(tree.right != null) {
            if(tree.val >= tree.right.val || max <= tree.right.val || min >= tree.right.val) answer = false    
            else DFS(tree.right, max, tree.val)
        }
    }
    
    DFS(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
    
    return answer
};