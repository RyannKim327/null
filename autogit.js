class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// The linked list is: 1 -> 2 -> 3 -> null
function getLinkedListLength(head) {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}

// Usage:
const length = getLinkedListLength(node1);
console.log(length); // Output: 3
