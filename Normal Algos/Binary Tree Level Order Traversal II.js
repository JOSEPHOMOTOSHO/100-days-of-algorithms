/*
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
*/


/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    let result = []
    if(!root) return []
    let queue = []
    queue.push(root)
    while(queue.length > 0){
        let row = []
        let rowSize = queue.length 
        while(rowSize > 0){
            let node = queue.shift()
            if(node.left !== null){
                queue.push(node.left)
            }
             if(node.right !== null){
                queue.push(node.right)
            }
            row.push(node.val)
            rowSize--
        }
          result.push(row)
    }
  return result.reverse()
};