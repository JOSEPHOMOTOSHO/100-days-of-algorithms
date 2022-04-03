/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

Hints:
1. What if you knew the linked list size? What is the difference between finding the Kth-tolast
element and finding the Xth element?

2. If you don't know the linked list size, can you compute it? How does this impact the
runtime?

3. You might find it useful to return multiple values. Some languages don't directly support
this, but there are workarounds in essentially any language. What are some of those
workarounds?

4. Can you do it iteratively? Imagine if you had two pointers pointing to adjacent nodes
and they were moving at the same speed through the linked list. When one hits the end
of the linked list, where will the other be?

5. Try implementing it recursively. If you could find the (K-l)th to last element, can you
find the Kth element?
*/

const LinkedList = require("../util/LinkedListX");

function findKthToLast(kth, list) {
  let listArr = list._toArray();
  if (kth > listArr.length || kth <= 0) return null;
  if (kth === 1) return list.tail;
  let positionOfKthElement = listArr.length - kth;
  let curr = list.head;
  let count = 0;
  while (count !== positionOfKthElement) {
    curr = curr.next;
    count++;
  }
  return curr;
}

/* TESTS */
let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);

console.log(findKthToLast(3, l));

console.log(findKthToLast(10, l));

console.log(findKthToLast(-1, l));

console.log(findKthToLast(0, l));

console.log(findKthToLast(1, l));
