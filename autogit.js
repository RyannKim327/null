class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMiddleElement(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
}

// Create a linked list with sample data
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const middleElement = findMiddleElement(head);
console.log(middleElement.data); // Output: 3
