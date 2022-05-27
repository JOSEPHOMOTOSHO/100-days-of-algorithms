/*
Given the head of a linked list, rotate the list to the right by k places.
https://leetcode.com/problems/rotate-list/
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
    if(!head) return head
    
    //Get the length of the linkedList
    let length = 1
    let tail = head
    
    while(tail.next){
        tail = tail.next
        length++
    }
    
    k = k % length
    if(k === 0){
        return head
    }
    
    let current = head
    for(let i = 1 ; i <= length-k-1; i++){
        current = current.next
    }
let newHead = current.next
current.next = null
tail.next = head
return newHead
};
