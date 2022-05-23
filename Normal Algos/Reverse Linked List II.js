/*
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right) return head
    if (!head || !head.next) return head;
    //have two pointers
    let leftPointer = 1
    let rightPointer = 1
    let leftNode = head
    let rightNode = head
    let nodeBeforeLeftNode = head
    let nodeAfterRightNode
    while(leftPointer < left){
        if(left - leftPointer === 1){
             nodeBeforeLeftNode = leftNode
        }
        leftNode = leftNode.next
        leftPointer++
    }
    
     while(rightPointer < right){
        rightNode = rightNode.next
        rightPointer++
    }
    
 nodeAfterRightNode = rightNode.next
    
    //reverse the sub portion
    let prev = null
    let leftNodeHold = leftNode
    while(leftNode && leftNode !== nodeAfterRightNode){
        let next = leftNode.next
        leftNode.next = prev
        prev = leftNode
        leftNode = next
    }
nodeBeforeLeftNode.next = rightNode
leftNodeHold.next = nodeAfterRightNode
 
return nodeBeforeLeftNode
};














