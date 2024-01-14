function findMiddleElement(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
// Node constructor
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a linked list
const head = new Node(1);
const secondNode = new Node(2);
const thirdNode = new Node(3);
const fourthNode = new Node(4);
const fifthNode = new Node(5);

head.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;

// Find the middle element
const middleElement = findMiddleElement(head);
console.log(middleElement.value); // Output: 3
