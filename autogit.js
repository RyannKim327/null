function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Linked list contains a cycle
      return true;
    }
  }

  // No cycle found
  return false;
}
