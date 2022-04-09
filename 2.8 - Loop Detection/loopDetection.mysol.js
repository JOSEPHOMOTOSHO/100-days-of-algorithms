/*
Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
as to make a loop in the linked list.
EXAMPLE
Input: A -> B -> C - > D -> E -> C [the same C as earlier]
Output: C
Hints: #50, #69, #83, #90
*/
var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

var loopDetection = (head) => {
  if (!head || !head.next) return null;
  let rabbit = head;
  let turtle = head;

  do {
    rabbit = rabbit.next;
    turtle = turtle.next;
    if (!rabbit || !rabbit.next) return null;
    rabbit = rabbit.next;
  } while (rabbit !== turtle);

  turtle = head;
  while (turtle !== rabbit) {
    turtle = turtle.next;
    rabbit = rabbit.next;
  }

  return turtle;
};

/* TEST */
// A -> B -> C -> D -> E -> C

var a = new LinkedList();
var b = new LinkedList();
var c = new LinkedList();
var d = new LinkedList();
var e = new LinkedList();
var f = new LinkedList();

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;
console.log(loopDetection(a));
console.log(loopDetection(a) === c, true);

var A = new LinkedList();
var B = new LinkedList();
var C = new LinkedList();
var D = new LinkedList();
var E = new LinkedList();
var F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A) === null, true);
