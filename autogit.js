function findNthFromEnd(head, n) {
  let p1 = head;
  let p2 = head;

  // Move p2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      return null; // Linked list is shorter than n nodes
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches tail
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1.value;
}
