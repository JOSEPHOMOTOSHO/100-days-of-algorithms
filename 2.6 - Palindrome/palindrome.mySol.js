// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half
/*
Palindrome: Implement a function to check if a linked list is a palindrome.
Hints:#5, #13, #29, #61, #101
*/
var LinkedList = require("../util/LinkedList");

var palindrome = function (head) {
  let arrOfLinkedList = [];
  let current = head;

  while (current) {
    arrOfLinkedList.push(current.value);
    current = current.next;
  }
  let reverseArrayOfLinkedlist = arrOfLinkedList.slice().reverse();
  for (let index = 0; index < arrOfLinkedList.length; index++) {
    if (arrOfLinkedList[index] !== reverseArrayOfLinkedlist[index]) {
      return false;
    }
  }
  console.log("or", arrOfLinkedList);
  console.log("co", reverseArrayOfLinkedlist);

  return true;
};

/* TEST */

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("c");
var f = new LinkedList("b");
var g = new LinkedList("a");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(palindrome(a));
