function getIntersectionNode(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }

  return p1; // Return either p1 or p2, since they will be the same when an intersection is found.
}
