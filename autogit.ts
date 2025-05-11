class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow!.next;
    fast = fast.next.next;
  }

  return false;
}
