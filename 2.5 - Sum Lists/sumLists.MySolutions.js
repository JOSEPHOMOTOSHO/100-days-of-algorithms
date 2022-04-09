/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
Output: 2 -> 1 -> 9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
Output: 9 -> 1 -> 2. That is, 912.
*/
var LinkedList = require("../util/LinkedList");
var printList = require("../util/printList");

function sumList(l1, l2) {
  // create a new linked list
  let newLinkedList = new LinkedList(null);
  let current = newLinkedList;
  //point to the list, track if you will carry over or not, track an individual node number
  let pointer1 = l1,
    pointer2 = l2,
    carry = 0,
    num1 = 0,
    num2 = 0;

  while (pointer1 || pointer2) {
    num1 = pointer1 ? pointer1.value : 0;
    num2 = pointer2 ? pointer2.value : 0;
    if (num1 + num2 + carry > 9) {
      let sol = num1 + num2 + carry - 10;
      current.next = new LinkedList(sol);
      current = current.next;
      carry = 1;
    } else {
      current.next = new LinkedList(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }

    if (pointer1) pointer1 = pointer1.next;
    if (pointer2) pointer2 = pointer2.next;
  }

  if (carry) current.next = new LinkedList(carry);

  return newLinkedList.next;
}

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 9. the answer refers to 1612

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);
