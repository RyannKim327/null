function findMiddleElement(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
// Node class to represent a linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let middleElement = findMiddleElement(head);
console.log(middleElement.value);  // Output: 3
