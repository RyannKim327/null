function findNthNodeFromEnd(head, n) {
  let fast = head;
  let slow = head;

  // Move the 'fast' pointer n positions forward
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      // n is greater than the total number of nodes
      return null;
    }
    fast = fast.next;
  }

  // Move both pointers until 'fast' reaches the end of the list
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow; // Return the nth node from end
}
