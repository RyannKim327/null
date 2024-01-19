function reverseLinkedList(head) {
  let previous = null;
  let current = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = current;
    current = head;
    head = next;
  }

  return current;
}
// Create the linked list
const node1 = { data: 1, next: null };
const node2 = { data: 2, next: null };
const node3 = { data: 3, next: null };
const node4 = { data: 4, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

const head = node1;

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed linked list
let current = reversedHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
4
3
2
1
