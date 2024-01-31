function getIntersection(headA, headB) {
  let ptr1 = headA;
  let ptr2 = headB;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1 ? ptr1.next : headB;
    ptr2 = ptr2 ? ptr2.next : headA;
  }

  return ptr1;
}
