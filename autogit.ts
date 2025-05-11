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

  // Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) return null; // n is larger than the list length
    fast = fast.next;
  }

  // Move both until fast reaches the end
  while (fast !== null) {
    slow = slow!.next;
    fast = fast.next;
  }

  return slow;
}
// Build linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const n = 2;
const nthNode = findNthFromEnd(head, n);

if (nthNode) {
  console.log(`The ${n}th node from the end has value:`, nthNode.value);
} else {
  console.log(`The list is shorter than ${n} nodes.`);
}
The 2th node from the end has value: 4
