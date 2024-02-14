function findNthFromEnd(head, n) {
  let current = head;
  let nthNode = head;

  // Move current pointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (current === null) {
      return null; // n is greater than the length of the linked list
    }
    current = current.next;
  }

  // Move both pointers until current reaches the end
  while (current !== null) {
    current = current.next;
    nthNode = nthNode.next;
  }

  // Return the value of the nthNode from the end
  return nthNode.value;
}
