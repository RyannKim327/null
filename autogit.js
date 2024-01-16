function findNthNodeFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the first pointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (first === null) {
      return null; // The list has fewer than n nodes
    }
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second; // Returns the nth node from the end
}
