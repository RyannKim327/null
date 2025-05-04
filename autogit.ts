class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

function getLength<T>(head: ListNode<T> | null): number {
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

console.log(getLength(node1)); // Output: 3
