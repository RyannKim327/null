function Node(value) {
  this.value = value;
  this.next = null;
}
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
// Create a linked list with 3 nodes: 1 -> 2 -> 3
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// Reverse the linked list
const reversedHead = reverseLinkedList(node1);

// Output the reversed list: 3 -> 2 -> 1
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
3
2
1
