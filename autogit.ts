class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const middle = findMiddle(list);
console.log(middle?.value);  // Output: 3
