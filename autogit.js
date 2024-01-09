function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Definition of a linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Creating the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Reversing the linked list
const reversedHead = reverseLinkedList(head);

// Printing the reversed list: 5 -> 4 -> 3 -> 2 -> 1
let current = reversedHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
