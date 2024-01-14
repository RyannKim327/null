function getNthNodeFromEnd(head, n) {
  let fast = head;
  let slow = head;

  // Move the 'fast' pointer ahead by n positions
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // If there are less than n nodes, return null
    }
    fast = fast.next;
  }

  // Iterate until the 'fast' pointer reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 'slow' pointer now points to the nth node from the end
  return slow.value;
}
