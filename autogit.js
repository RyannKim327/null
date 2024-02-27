class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function linkedListToArray(head) {
  let current = head;
  const values = [];
  
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  
  return values;
}
function isPalindromeLinkedList(head) {
  const values = linkedListToArray(head);
  const len = values.length;
  
  for (let i = 0; i < len / 2; i++) {
    if (values[i] !== values[len - 1 - i]) {
      return false;
    }
  }
  
  return true;
}
// Example linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindromeLinkedList(node1)); // Output: true
