class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMiddleElement(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

// Creating a linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Finding the middle element of the linked list
const middleElement = findMiddleElement(head);
console.log(middleElement);
