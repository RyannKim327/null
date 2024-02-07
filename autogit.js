function findNthNodeFromEnd(head, n) {
  let pointer1 = head;
  let pointer2 = head;

  // Move pointer2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (pointer2 === null) {
      return null; // Invalid input or n exceeds list length
    }
    pointer2 = pointer2.next;
  }

  // Move both pointers simultaneously until pointer2 reaches the end
  while (pointer2 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  // pointer1 will be pointing to the nth node from the end
  return pointer1;
}
