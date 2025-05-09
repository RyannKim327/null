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

  let fast: ListNode<T> | null = head;
  let slow: ListNode<T> | null = head;

  // Move fast ahead by n steps
  for (let i = 0; i < n; i++) {
    if (!fast) return null; // n is larger than the length of the list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  return slow;
}
