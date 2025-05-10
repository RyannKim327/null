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
    const nextTemp = current.next; // store the next node
    current.next = prev;           // reverse the pointer
    prev = current;                // move prev up
    current = nextTemp;            // move current up
  }

  return prev; // prev will be the new head at the end
}
