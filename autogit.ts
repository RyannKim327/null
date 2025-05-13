class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

function getNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
  if (!head || n <= 0) return null;

  let fast: ListNode<T> | null = head;
  let slow: ListNode<T> | null = head;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return null;  // n is greater than length of list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    slow = slow!.next;
    fast = fast.next;
  }

  return slow;
}
// Linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1,
                new ListNode(2,
                new ListNode(3,
                new ListNode(4,
                new ListNode(5)))));

const nthNode = getNthFromEnd(head, 2);
console.log(nthNode?.value);  // Outputs: 4
