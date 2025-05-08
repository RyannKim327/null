class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let first: ListNode | null = head;
  let second: ListNode | null = head;

  // Move first pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!first) {
      // n is larger than the length of the list
      return null;
    }
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first) {
    first = first.next;
    second = second!.next;
  }

  return second;
}
