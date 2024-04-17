class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let leftPointer = head;
  let rightPointer = head;

  // Move rightPointer forward by n steps
  for (let i = 0; i < n; i++) {
    if (rightPointer === null) {
      return null; // Indicates that n is greater than the number of nodes in the list
    }
    rightPointer = rightPointer.next;
  }

  // Move both pointers simultaneously
  while (rightPointer !== null) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }

  // leftPointer now points to the nth node from the end of the list
  return leftPointer.value;
}

// Example linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the 2nd node from the end
console.log(findNthNodeFromEnd(head, 2)); // Output: 4
