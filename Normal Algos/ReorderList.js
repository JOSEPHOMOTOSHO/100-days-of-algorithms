/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.


https://leetcode.com/problems/reorder-list/
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  let fastPointer = head.next;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let second = slowPointer.next;
  slowPointer.next = null;

  let prev = null;
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }
  second = prev;
  let first = head;
  while (second) {
    let tempOne = first.next;
    let tempTwo = second.next;
    first.next = second;
    second.next = tempOne;
    second = tempTwo;
    first = tempOne;
  }
};
