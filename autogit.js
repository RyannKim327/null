function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  // Traverse and update each node
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Return the new head of the reversed list
  return prev;
}
// Define a simple linked list
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Reverse the linked list
const reversedList = reverseLinkedList(node1);

// Print the reversed linked list: 5 -> 4 -> 3 -> 2 -> 1 -> null
let current = reversedList;
while (current) {
  console.log(current.value);
  current = current.next;
}
5
4
3
2
1
