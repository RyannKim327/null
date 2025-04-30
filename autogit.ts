class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;

  let p1: ListNode | null = headA;
  let p2: ListNode | null = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1;  // Can be null (no intersection) or the intersection node
}
