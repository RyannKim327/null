function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move one step at a time
    fast = fast.next.next; // Move two steps at a time

    // If fast and slow pointers meet, the linked list has a cycle
    if (fast === slow) {
      return true;
    }
  }

  // If no cycle is found, the linked list is acyclic
  return false;
}
