function findMiddleElement(head) {
  let slow = head;  // slow pointer moves 1 step at a time
  let fast = head;  // fast pointer moves 2 steps at a time

  while (fast !== null && fast.next !== null) {
    slow = slow.next;      // move slow pointer by 1 step
    fast = fast.next.next; // move fast pointer by 2 steps
  }

  return slow;
}
