class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  
  while (current !== null) {
    const next = current.next; // temporarily store the next node
    current.next = previous; // reverse the next pointer of the current node
    
    // move the previous and current pointers one step forward
    previous = current;
    current = next;
  }
  
  return previous; // return the new head of the reversed list
}
// Create the linked list: 1 -> 2 -> 3 -> 4

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Reverse the linked list

const reversedHead = reverseLinkedList(node1);

// Print the reversed list: 4 -> 3 -> 2 -> 1

let currentNode = reversedHead;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
4
3
2
1
