class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getLinkedListLength(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}
// Create a linked list with three nodes
const head = new ListNode(1);
const secondNode = new ListNode(2);
const thirdNode = new ListNode(3);

// Connect the nodes
head.next = secondNode;
secondNode.next = thirdNode;

// Get the length of the linked list
const length = getLinkedListLength(head);

console.log(length); // Output: 3
