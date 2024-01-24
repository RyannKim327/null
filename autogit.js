function getIntersectionNode(headA, headB) {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }

  return pointerA; // or pointerB, as they are both intersecting nodes (null if no intersection)
}
