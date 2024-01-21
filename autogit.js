function findNthNodeFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the first pointer n steps forward
  for (let i = 0; i < n; i++) {
    if (first === null) {
      // Handle the case where n is greater than the length of the list
      return null;
    }
    first = first.next;
  }

  // Move both pointers until the first pointer reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second; // Return the nth node from the end
}
