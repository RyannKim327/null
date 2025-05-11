class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
function getNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || n <= 0) return null;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return null; // n is larger than the length of the list
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  // slow now points to the nth node from the end
  return slow;
}
// Construct the list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

const nthNode = getNthFromEnd(head, 2);
console.log(nthNode?.value); // Should print 4
