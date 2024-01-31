class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
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
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Reverse the linked list
let reversedHead = reverseLinkedList(head);

// Print the reversed linked list
let currentNode = reversedHead;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
5
4
3
2
1
