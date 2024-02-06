function getNthNodeFromEnd(list, n) {
  let firstPtr = list.head;
  let secondPtr = list.head;

  // Move firstPtr n positions ahead
  for (let i = 0; i < n; i++) {
    if (firstPtr === null) {
      return null; // The linked list size is less than n
    }
    firstPtr = firstPtr.next;
  }

  // Move both pointers until firstPtr reaches the end
  while (firstPtr !== null) {
    firstPtr = firstPtr.next;
    secondPtr = secondPtr.next;
  }

  return secondPtr;
}
