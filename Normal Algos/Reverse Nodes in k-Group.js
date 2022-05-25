/*
link: https://leetcode.com/problems/reverse-nodes-in-k-group/

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 
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
 const reverseKGroup = (head, k) => {
    //initialize a dummy node
    let dummyNode = new ListNode(0, head)
    //this allows us not to disconnect a group from the next one
    let previousGroupNode = dummyNode
    
    while(true){
        //get kth node to know the number of node to group 
        let kthNode = getKthNode(previousGroupNode, k)
        if(!kthNode){
            break            
        }
        //this is the next group that will be connected to from the previous group
        let nextGroupNode = kthNode.next
        
        //time to reverse the group. prev instead of null, will point at nextGroupNode
        let prev = nextGroupNode
        let current = previousGroupNode.next
        while(current !== nextGroupNode){
            let next = current.next
            current.next = prev
            prev = current
            current = next   
        }
        let temp = previousGroupNode.next
        previousGroupNode.next = kthNode
        previousGroupNode = temp
    }
      return dummyNode.next
    
};

const getKthNode = (currentNode, k) => {
    let current = currentNode
    while(current && k > 0){
        current = current.next
        k--   
    }
    return current
}

