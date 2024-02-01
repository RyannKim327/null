class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}

// Example usage:

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const middleElement = findMiddleElement(head);
console.log(middleElement.value); // Output: 3
