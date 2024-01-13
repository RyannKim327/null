class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> null
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log("Original linked list:");
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

const reversed = reverseLinkedList(node1);

console.log("Reversed linked list:");
let currentReversed = reversed;
while (currentReversed !== null) {
  console.log(currentReversed.value);
  currentReversed = currentReversed.next;
}
Original linked list:
1
2
3
4
Reversed linked list:
4
3
2
1
