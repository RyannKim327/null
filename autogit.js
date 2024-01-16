function findNthFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the second pointer to the nth node from the head
  for (let i = 0; i < n; i++) {
    if (second === null) {
      return null; // List is shorter than n nodes
    }
    second = second.next;
  }

  // Move both pointers simultaneously until second reaches the end
  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  return first;
}
