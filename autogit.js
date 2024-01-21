class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    // Store the next node
    next = current.next;

    // Reverse the link
    current.next = prev;

    // Move pointers one position ahead
    prev = current;
    current = next;
  }

  // Update the head of the list
  head = prev;

  return head;
}
// Create the linked list
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

head.next = node2;
node2.next = node3;
node3.next = node4;

// Reverse the linked list
const newHead = reverseLinkedList(head);

// Traverse the reversed list and print the values
let current = newHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
4
3
2
1
