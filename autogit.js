// Node class representing a single node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prevNode = null;
  let currNode = head;
  
  while (currNode !== null) {
    const nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  
  return prevNode;
}
// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Reversing the linked list
const reversedHead = reverseLinkedList(head);

// Printing the reversed linked list
let currNode = reversedHead;
while (currNode !== null) {
  console.log(currNode.value);
  currNode = currNode.next;
}
5
4
3
2
1
