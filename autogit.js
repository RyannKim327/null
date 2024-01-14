function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let p1 = headA;
  let p2 = headB;

  // Traverse the lists until pointers are equal or reach the end
  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1; // Return the intersection node or null
}
let intersectionNode = getIntersectionNode(headA, headB);
