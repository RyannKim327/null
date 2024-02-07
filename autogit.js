function findNthFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the first pointer n positions forward
  for (let i = 0; i < n; i++) {
    if (first === null) {
      // The linked list is shorter than n nodes
      return null;
    }
    first = first.next;
  }

  // Move both pointers simultaneously until the first pointer reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second;
}
