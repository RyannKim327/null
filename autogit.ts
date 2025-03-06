class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false; // Empty list or single node
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false; // Reached the end of the list
    }
    slow = slow.next!;
    fast = fast.next.next!;
  }

  return true; // Cycle detected
}
