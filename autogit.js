function findMiddleElement(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
// Define the Node class for the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a sample linked list
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// Call the function to find the middle element
const middleElement = findMiddleElement(head);

console.log(middleElement.data); // Output: 3
