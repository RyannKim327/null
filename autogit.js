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
    next = current.next; // Store the next node
    current.next = prev; // Reverse the link

    // Move pointers one step forward
    prev = current;
    current = next;
  }

  // Finally, update the head of the reversed list
  head = prev;
  return head;
}
// Create the linked list
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log("Original Linked List:");
console.log(node1); // Output: { value: 1, next: { value: 2, next: { value: 3, next: null } } }

let reversedHead = reverseLinkedList(node1);

console.log("Reversed Linked List:");
console.log(reversedHead); // Output: { value: 3, next: { value: 2, next: { value: 1, next: null } } }
