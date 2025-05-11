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

  // Move fast ahead by n nodes first
  for (let i = 0; i < n; i++) {
    if (!fast) return null;  // n is larger than the length of the list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next;
  }

  return slow;
}
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const nthNode = findNthFromEnd(node1, 2);
console.log(nthNode?.value); // Should output 4
