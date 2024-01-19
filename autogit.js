function findNthNodeFromEnd(list, n) {
  let ptr1 = list.head;
  let ptr2 = list.head;

  // Move ptr2 ahead by n nodes
  for (let i = 0; i < n; i++) {
    if (ptr2 === null) {
      // n is greater than the length of the linked list
      return null;
    }
    ptr2 = ptr2.next;
  }

  // Move both pointers simultaneously until ptr2 reaches the end
  while (ptr2 !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  // ptr1 points to the nth node from the end
  return ptr1;
}
