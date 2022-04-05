/*
Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node.
EXAMPLE
lnput:the node c from the linked lista->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e- >f
Hint:
Picture the list 1->5->9->12. Removing 9 would make it look like 1->5->12. You only
have access to the 9 node. Can you make it look like the correct answer?
*/

const LinkedList = require("../util/LinkedListX");
const printList = require("../util/printList");

function deleteMidNode(node) {
  if (node.next !== null && node.next.next !== null) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

/* TEST */

let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  list.append(item);
}

printList(list.head);
deleteMidNode(list.head.next);
printList(list.head);
