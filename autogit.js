function findNthNodeFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move first pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    // If first pointer runs out of nodes, return null
    if (first === null) {
      return null;
    }
    first = first.next;
  }

  // Move both pointers until first reaches end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Return the value of the node pointed by second
  return second.value;
}
