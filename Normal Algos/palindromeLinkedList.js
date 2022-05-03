/*
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome.
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  slowPointer = reverse(slowPointer);
  fastPointer = head;

  while (slowPointer) {
    if (slowPointer.val !== fastPointer.val) {
      return false;
    }
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  return true;
};

const reverse = (head) => {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
