class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function getLinkedListLength(head: ListNode | null): number {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}

// Example usage:
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(getLinkedListLength(node1)); // Output: 3
