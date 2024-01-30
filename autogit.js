// Define the original linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// Reverse the linked list
const reversedHead = reverseLinkedList(node1);

// Print the reversed linked list
let currentNode = reversedHead;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
3
2
1
