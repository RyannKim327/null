function hasCycle(head) {
  if (!head || !head.next) {
    // If the list is empty or has only one node, there can't be a cycle
    return false;
  }

  let slow = head;  // Tortoise pointer
  let fast = head.next;  // Hare pointer

  while (slow !== fast) {
    if (!fast || !fast.next) {
      // If either pointer reaches the end of the list, there is no cycle
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  // If the fast pointer catches up with the slow pointer, a cycle is found
  return true;
}
