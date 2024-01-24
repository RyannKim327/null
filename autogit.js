function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
// Define a sample linked list
const node1 = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };

node1.next = node2;
node2.next = node3;

console.log("Original Linked List:");
console.log(node1); // 1->2->3

const reversedHead = reverseLinkedList(node1);

console.log("Reversed Linked List:");
console.log(reversedHead); // 3->2->1
