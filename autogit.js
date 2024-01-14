function findMiddleElement(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
// Linked List Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create Linked List
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find Middle Element
let middleElement = findMiddleElement(head);
console.log(middleElement.data); // Output: 3
