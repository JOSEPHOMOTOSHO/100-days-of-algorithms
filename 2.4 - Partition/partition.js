/*
Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
EXAMPLE
Input:
3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
Output:
3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
Hints: #3, #24
*/

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const partition = (head, val) => {
  let left;
  let right;
  let middle;
  let currMid = null;
  let currLeft = null;
  let currRight = null;

  let node = head;

  while (node !== null) {
    if (node.value < val) {
      if (!currLeft) {
        left = node;
        currLeft = left;
      } else {
        currLeft.next = node;
        currLeft = currLeft.next;
      }
    } else if (node.value === val) {
      if (!currMid) {
        middle = node;
        currMid = middle;
      } else {
        currMid.next = node;
        currMid = currMid.next;
      }
    } else {
      if (!currRight) {
        right = node;
        currRight = right;
      } else {
        currRight.next = node;
        currRight = currRight.next;
      }
    }
    node = node.next;
  }
  currLeft.next = middle;
  currRight.next = null;

  currMid.next = right;
  return left;
};

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printList(newa);
