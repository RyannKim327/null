function hasCycle(head) {
  if (!head || !head.next) {
    return false; // No cycle if list is empty or only has one node
  }

  let slow = head; // Slower pointer
  let fast = head.next; // Faster pointer

  while (fast && fast.next) {
    if (slow === fast) {
      return true; // Cycle detected
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false; // Reached end of list, no cycle found
}
