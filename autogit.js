function findNthNodeFromEnd(head, n) {
  let count = 0;
  let first = head;
  let second = head;

  // Move second pointer n nodes ahead
  while (count < n) {
    if (second === null) {
      // Edge case: fewer than n nodes in the list
      return null;
    }
    second = second.next;
    count++;
  }

  // Move both pointers until second reaches the end
  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  return first.value;
}
