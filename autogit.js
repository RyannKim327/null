function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  
  return p1; // or p2, as they will be either the common node or null (no intersection)
}
