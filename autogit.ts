class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

function findNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
  if (!head || n <= 0) return null;

  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return null; // n is greater than the length of the list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    slow = slow!.next;
    fast = fast.next;
  }

  return slow;
}
