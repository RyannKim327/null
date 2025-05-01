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
    const nextNode = current.next;  // Save next node
    current.next = prev;             // Reverse pointer
    prev = current;                  // Move prev forward
    current = nextNode;              // Move current forward
  }

  return prev;  // New head of the reversed list
}
