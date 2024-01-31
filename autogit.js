function findNthNodeFromEnd(head, n) {
  let ptr1 = head;
  let ptr2 = head;

  // Move ptr1 n steps forward
  for (let i = 0; i < n; i++) {
    if (ptr1 === null) {
      // If the list is shorter than n, return null
      return null;
    }
    ptr1 = ptr1.next;
  }

  // Move both pointers until ptr1 reaches the end
  while (ptr1 !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  // ptr2 now points to the nth node from the end
  return ptr2;
}
