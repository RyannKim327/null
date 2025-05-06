class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
function findMiddle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;  // definitely not null here because fast.next !== null
    fast = fast.next.next;
  }

  return slow;
}
