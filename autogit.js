class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> null
const node4 = new Node(4, null);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

const reversedList = reverseLinkedList(node1);

// Traverse the reversed linked list and print the values
let current = reversedList;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
4
3
2
1
