function getIntersectionNode(headA, headB) {
  let set = new Set();
  
  // Traverse through the first linked list and store node references in a set
  let currentA = headA;
  while (currentA !== null) {
    set.add(currentA);
    currentA = currentA.next;
  }
  
  // Traverse through the second linked list and check for intersection
  let currentB = headB;
  while (currentB !== null) {
    if (set.has(currentB)) {
      return currentB; // Intersection found
    }
    currentB = currentB.next;
  }
  
  return null; // No intersection found
}
