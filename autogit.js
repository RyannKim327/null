class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);

head.next = second;
second.next = third;
function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}

// Call the function to reverse the linked list
let reversedHead = reverseLinkedList(head);
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
