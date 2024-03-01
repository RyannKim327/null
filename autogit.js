class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  if (!head) {
    return null;
  }

  let firstPointer = head;
  let secondPointer = head;

  // Move the firstPointer n steps forward
  for (let i = 0; i < n; i++) {
    if (firstPointer === null) {
      return null; // The list is shorter than n
    }
    firstPointer = firstPointer.next;
  }

  // Move both pointers until firstPointer reaches the end
  while (firstPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return secondPointer;
}

// Usage example
// Create a sample linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2;
const result = findNthFromEnd(head, n);
console.log(result ? result.value : "Node not found");
