function findNthNodeFromEnd(head, n) {
  let pointer1 = head;
  let pointer2 = head;

  // Move pointer1 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (pointer1 === null) {
      return null; // Invalid input, list smaller than n
    }
    pointer1 = pointer1.next;
  }

  // Move both pointers until pointer1 reaches the end of the list
  while (pointer1 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2; // Return the nth node from the end
}
