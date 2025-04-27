class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false; // Empty list or single node can't have a cycle
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      // Tortoise and hare meet — cycle exists
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  // Fast reached null, no cycle
  return false;
}
