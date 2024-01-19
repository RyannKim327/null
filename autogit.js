function findNthNodeFromEnd(head, n) {
  let p1 = head;
  let p2 = head;

  // Move p2 n positions ahead
  while (n > 0 && p2 !== null) {
    p2 = p2.next;
    n--;
  }

  // If the length of the list is less than n
  if (n > 0) {
    return null; // or any other desired value
  }

  // Move both pointers until p2 reaches the last node
  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // p1 points to the nth node from the end
  return p1.value;
}
