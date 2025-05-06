class ListNode {
  value: any;
  next: ListNode | null;
  
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;  // Cycle detected
    slow = slow!.next;
    fast = fast.next.next;
  }

  return false; // No cycle
}
