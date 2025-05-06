class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

function findNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
  if (!head || n <= 0) return null;

  let first: ListNode<T> | null = head;
  let second: ListNode<T> | null = head;

  // Move first pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!first) return null; // n is larger than the length of list
    first = first.next;
  }

  // Move both pointers until first reaches end
  while (first) {
    first = first.next;
    second = second!.next;
  }

  return second;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const result = findNthFromEnd(head, 2);
console.log(result ? result.value : 'Not found');  // Output: 4
