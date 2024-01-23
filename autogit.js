function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Example usage:
const node3 = new ListNode(3, null);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

console.log(reverseLinkedList(head)); // Outputs: ListNode { val: 3, next: ListNode { val: 2, next: [Object] } }
