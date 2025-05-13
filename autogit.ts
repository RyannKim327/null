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
    if (!fast) return null; // If n is greater than the length of the list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  return slow;
}
// Build linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

const nthNode = findNthFromEnd(head, 2);
console.log(nthNode ? nthNode.value : "Not found"); // Outputs 4
