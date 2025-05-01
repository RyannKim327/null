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
    const nextNode = current.next;  // keep track of the next node
    current.next = prev;             // reverse the link
    prev = current;                  // move prev forward
    current = nextNode;              // move current forward
  }
  return prev;  // prev will be the new head after the loop ends
}
