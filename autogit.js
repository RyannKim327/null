class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Reverse the linked list
let newHead = reverseLinkedList(head);

// Print the reversed linked list
let current = newHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
5
4
3
2
1
