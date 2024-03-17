class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let firstPointer = head;
  let secondPointer = head;

  // Move the first pointer by n steps
  for (let i = 0; i < n; i++) {
    if (firstPointer === null) {
      return null; // Handle the case where n is greater than the length of the linked list
    }
    firstPointer = firstPointer.next;
  }

  // Move both pointers until the first pointer reaches the end
  while (firstPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return secondPointer;
}

// Example of creating a linked list and finding the nth node from the end
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head, n);

if (nthNodeFromEnd !== null) {
  console.log(`${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
  console.log(`Could not find the ${n}th node from the end.`);
}
