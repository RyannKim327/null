function findNthNodeFromEnd(n) {
  let mainPtr = head;
  let refPtr = head;
  
  // Move refPtr n positions ahead
  for (let i = 0; i < n; i++) {
    if (refPtr === null) {
      return null; // Linked list is shorter than n
    }
    refPtr = refPtr.next;
  }
  
  // Move both pointers synchronously
  while (refPtr !== null) {
    mainPtr = mainPtr.next;
    refPtr = refPtr.next;
  }
  
  return mainPtr;
}
