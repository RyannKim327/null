// Define a Node class for the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to find the length of the linked list
function findLength(head) {
  let current = head;
  let length = 0;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}

// Example usage:
// Create a linked list with 3 nodes: 1 -> 2 -> 3
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

// Find the length of the linked list
const length = findLength(head);
console.log("Length of the linked list: ", length);
