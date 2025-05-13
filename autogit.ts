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
  let next: ListNode<T> | null = null;

  while (current !== null) {
    next = current.next;    // temporarily store the next node
    current.next = prev;    // reverse the current node's pointer
    prev = current;         // move prev to current
    current = next;         // move to the next node in original list
  }

  return prev; // prev ends up as the new head
}
const n3 = new ListNode(3);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

const reversedHead = reverseLinkedList(n1);

let pointer = reversedHead;
while (pointer !== null) {
  console.log(pointer.value); // 3, 2, 1
  pointer = pointer.next;
}
