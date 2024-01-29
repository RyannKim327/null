function hasCycle(head) {
  // Initialize two pointers - slow and fast
  let slow = head;
  let fast = head;

  // Move slow pointer by one step and fast pointer by two steps
  // If a cycle exists, they will eventually meet
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If they meet, a cycle exists
    if (slow === fast) {
      return true;
    }
  }

  // No cycle found
  return false;
}
