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

  let first: ListNode<T> | null = head;
  let second: ListNode<T> | null = head;

  // Move first pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!first) return null; // n is larger than the list length
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second!.next;
  }

  return second;
}
