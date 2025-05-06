class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddle<T>(head: ListNode<T> | null): ListNode<T> | null {
  if (!head) return null;

  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}
// Constructing a linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

const middle = findMiddle(head);
console.log(middle?.value); // Output: 3
