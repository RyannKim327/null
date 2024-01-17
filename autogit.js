function hasCycle(head) {
  if (head === null || head.next === null) {
    return false; // Empty list or a single node, so no cycle
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false; // Reached the end of the list, so no cycle
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true; // Found a cycle
}
