function findNthFromEnd(head, n) {
  let firstPointer = head;
  let secondPointer = head;

  // Move secondPointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (secondPointer === null) {
      return null; // Return null if there are fewer than n nodes in the linked list
    }
    secondPointer = secondPointer.next;
  }

  // Iterate both pointers until secondPointer reaches the end
  while (secondPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  // Return the value of the nth node from the end
  return firstPointer.value;
}
