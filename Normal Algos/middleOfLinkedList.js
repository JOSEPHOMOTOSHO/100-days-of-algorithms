/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

https://leetcode.com/problems/middle-of-the-linked-list/

*/

const middleNode = (head) => {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};
