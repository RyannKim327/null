class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement(head) {
  // Initialize two pointers
  let slowPtr = head;
  let fastPtr = head;

  // Traverse the linked list with different speeds until fastPtr reaches the end
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // Return the value of the middle element
  return slowPtr.value;
}

// Test the code
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(findMiddleElement(head)); // Output: 3
