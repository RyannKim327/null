function getIntersectionNode(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1; // Can also return p2, as they are the same at the intersection (or null if lists don't intersect)
}
