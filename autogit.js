function getIntersection(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 && p2) {
    if (p1 === p2) {
      return p1; // Both pointers are pointing to the intersection node
    }

    p1 = p1.next; // Move p1 forward
    p2 = p2.next; // Move p2 forward
  }

  return null; // No intersection found
}
