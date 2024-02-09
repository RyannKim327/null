function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersection(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1;
}
