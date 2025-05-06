class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;           // move slow pointer by 1
    fast = fast.next.next;       // move fast pointer by 2

    if (slow === fast) {
      return true;               // cycle detected
    }
  }

  return false;                  // no cycle
}
