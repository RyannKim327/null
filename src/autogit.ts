class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const nextNode = current.next;  // Keep track of the next node
    current.next = prev;            // Reverse the link
    prev = current;                 // Move prev one step forward
    current = nextNode;             // Move current one step forward
  }

  return prev;
}
