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
  let current = head;
  while (current !== null) {
    const next = current.next;  // save next node
    current.next = prev;        // reverse pointer
    prev = current;             // move prev forward
    current = next;             // move current forward
  }
  return prev;  // new head of reversed list
}
// Create linked list: 1 -> 2 -> 3 -> null
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const reversedHead = reverseLinkedList(node1);
// Now reversedHead points to the list: 3 -> 2 -> 1 -> null
