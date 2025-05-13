class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
function reverseLinkedList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev: ListNode<T> | null = null;
  let current: ListNode<T> | null = head;

  while (current !== null) {
    const nextNode = current.next; // save next node
    current.next = prev;            // reverse the link
    prev = current;                 // move prev forward
    current = nextNode;             // move current forward
  }

  return prev; // new head of the reversed list
}
// Example usage:
const n3 = new ListNode(3);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

const reversedHead = reverseLinkedList(n1);

let cur = reversedHead;
while (cur !== null) {
  console.log(cur.value);
  cur = cur.next;
}
// Logs: 3, 2, 1
