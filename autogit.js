function findNthNodeFromEnd(head, n) {
  let p1 = head;
  let p2 = head;

  // Move p2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      // Length of the linked list is less than n
      return null;
    }
    p2 = p2.next;
  }

  // Move both pointers together until p2 reaches the end
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // p1 will be pointing to the nth node from the end of the linked list
  return p1.value;
}
