function findNthFromEnd(head, n) {
  let p1 = head;
  let p2 = head;
  
  // Move p1 n steps forward
  for (let i = 0; i < n; i++) {
    if (p1 === null) {
      return null; // n is larger than the length of the list
    }
    p1 = p1.next;
  }
  
  // Move both pointers simultaneously until p1 reaches the end of the list
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  
  // p2 will be pointing to the nth node from the end of the list
  return p2.value;
}
