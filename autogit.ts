class ListNode {
  val: any;
  next: ListNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;          // move slow pointer by 1 step
    fast = fast.next.next;      // move fast pointer by 2 steps

    if (slow === fast) {
      return true;  // cycle detected
    }
  }

  return false;  // no cycle found
}
