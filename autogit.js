function findNthFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the first pointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (!first) {
      // Length of list is less than n
      return null;
    }
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first) {
    first = first.next;
    second = second.next;
  }

  // Return the value of the node pointed by the second pointer
  return second.value;
}
