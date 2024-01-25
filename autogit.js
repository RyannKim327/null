function hasCycle(head) {
  let slow = head; // Slow pointer moves one node at a time
  let fast = head; // Fast pointer moves two nodes at a time

  while (fast !== null && fast.next !== null) {
    // Move slow pointer one step
    slow = slow.next;

    // Move fast pointer two steps
    fast = fast.next.next;

    // If slow and fast pointers meet, there is a cycle
    if (slow === fast) {
      return true;
    }
  }

  // If fast pointer reaches the end (null), no cycle exists
  return false;
}
