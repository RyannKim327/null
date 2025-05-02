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

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return null;  // n is larger than the length of the list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  return slow;
}
// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5)
      )
    )
  )
);

const result = findNthFromEnd(head, 2);
console.log(result?.value);  // Output: 4 (2nd node from the end)
