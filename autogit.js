function getIntersection(headA, headB) {
  // Edge cases
  if (!headA || !headB) return null;

  let p1 = headA;
  let p2 = headB;
  
  while (p1 !== p2) {
    // Move p1 to the head of the other linked list if it reaches the end
    p1 = p1 ? p1.next : headB;
    // Move p2 to the head of the other linked list if it reaches the end
    p2 = p2 ? p2.next : headA;
  }
  
  return p1; // p1 (or p2) will be the intersection node or null
}
