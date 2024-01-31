function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

function reverseLinkedList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

// Example usage:
const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log('Original Linked List:');
let currentNode = node1;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}

const reversedHead = reverseLinkedList(node1);

console.log('Reversed Linked List:');
currentNode = reversedHead;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
