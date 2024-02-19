class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let current = head;
  let nextNode;

  while (current) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

// Function to print the reversed linked list
function printLinkedList(head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Create a sample linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original Linked List:");
printLinkedList(head);

// Reverse the linked list
head = reverseLinkedList(head);

console.log("Reversed Linked List:");
printLinkedList(head);
