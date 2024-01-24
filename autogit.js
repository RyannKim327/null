class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// Linked list: 1 -> 2 -> 3
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
const reversedHead = reverseLinkedList(node1);

// The linked list is now reversed: 3 -> 2 -> 1
