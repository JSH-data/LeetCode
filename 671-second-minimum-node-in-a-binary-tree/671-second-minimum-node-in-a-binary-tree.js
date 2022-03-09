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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    
    const smallest = root.val;
    const answer = [];
    
    function DFS(node) {
        if(node.left === null) return 
        else {
            if(node.left.val > smallest) answer.push(node.left.val)
            if(node.right.val > smallest) answer.push(node.right.val)       

            DFS(node.left)
            DFS(node.right)
        }
    }
    DFS(root)
    return answer.length == 0 ? -1 : Math.min(...answer)
};