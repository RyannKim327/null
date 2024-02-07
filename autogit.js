function findNthNodeFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the first pointer n nodes from the beginning
  for (let i = 0; i < n; i++) {
    if (first === null) {
      // If there are fewer than n nodes
      return null;
    }
    first = first.next;
  }

  // Move both pointers simultaneously until the first pointer reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Return the node pointed to by the second pointer
  return second;
}
