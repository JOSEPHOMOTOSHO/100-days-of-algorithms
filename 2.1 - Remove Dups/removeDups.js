/*
Remove Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
Hints: #9, #40
1. Have you tried a hash table? You should be able to do this in a single pass of the linked
list.

2. Without extra space, you'll need O(N2 ) time. Try using two pointers, where the second
one searches ahead of the first one.
*/

// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

removeDuplicates(list);

console.log(list._toArray()); // [1, 5, 6, 8]
