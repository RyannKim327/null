function getNthNodeFromEnd(list, n) {
  let p1 = list;
  let p2 = list;

  // Move p2 n positions ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      return null; // n is greater than list length
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches the end
  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // p1 points to the nth node from the end
  return p1.value; // or return p1 for the node itself
}
