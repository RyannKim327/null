function ListNode(value) {
  this.value = value;
  this.next = null;
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Example linked list: 1 -> 2 -> 3 -> 4 -> null
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// Reverse the linked list
const reversedHead = reverseLinkedList(node1);

// Current reversed linked list: 4 -> 3 -> 2 -> 1 -> null
