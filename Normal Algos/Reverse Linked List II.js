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
 const reverseBetween = (head, left, right) => {
    let dummyNode = new ListNode(0,head)
    let leftPrev = dummyNode
    let current = head
    
    for(let i = 1; i <= left - 1 ; i++){
        leftPrev = current
        current = current.next
    }
    let prev = null
    for(let i = left; i < right + 1; i++){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
   
    leftPrev.next.next = current
    leftPrev.next = prev
    return dummyNode.next
    
    
};













