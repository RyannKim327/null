function getNthNodeFromEnd(head, n) {
  let p1 = head;
  let p2 = head;

  // Move p1 n steps ahead
  for (let i = 0; i < n; i++) {
    if (p1 === null) {
      // Invalid n value, as there are fewer than n nodes in the list
      return "Invalid n value";
    }
    p1 = p1.next;
  }

  // Move both pointers until p1 reaches the end
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // p2 will be pointing to the nth node from the end
  return p2.value;
}
