/*
Intersection: Given two (singly) linked lists, determine if the two lists intersect. 
Return the intersecting node. Note that the intersection is defined based on reference, not value.
That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.

*/

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const getLength = (head) => {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
};
var intersection = function (head1, head2) {
  let currentHead1 = head1;
  let currentHead2 = head2;

  let head1Length = getLength(head1);
  let head2Length = getLength(head2);
  let diff = Math.abs(head1Length - head2Length);

  while (diff !== 0) {
    if (head2Length > head1Length) {
      currentHead2 = currentHead2.next;
    } else {
      currentHead1 = currentHead1.next;
    }
    diff--;
  }

  while (currentHead1 !== currentHead2) {
    currentHead1 = currentHead1.next;
    currentHead2 = currentHead2.next;
  }

  return currentHead1;
};

/* TEST */

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("e");
var f = new LinkedList("f");
var g = new LinkedList("g");
var h = new LinkedList("h");
var i = new LinkedList("i");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

var a1 = new LinkedList("a1");
var b1 = new LinkedList("b1");
var c1 = new LinkedList("c1");

a1.next = b1;
b1.next = c1;
c1.next = e;

var intersectNode = intersection(a, a1);

console.log(intersectNode.value);
