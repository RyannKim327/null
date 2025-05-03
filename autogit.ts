class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function getLength(head: ListNode | null): number {
  let length = 0;
  while (head !== null) {
    length++;
    head = head.next;
  }
  return length;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const lenA = getLength(headA);
  const lenB = getLength(headB);

  // Advance the head of the longer list by difference in lengths
  let longer = lenA > lenB ? headA : headB;
  let shorter = lenA > lenB ? headB : headA;
  let diff = Math.abs(lenA - lenB);

  while (diff > 0 && longer !== null) {
    longer = longer.next;
    diff--;
  }

  // Move both pointers until they intersect or reach the end
  while (longer !== null && shorter !== null) {
    if (longer === shorter) {
      return longer; // Intersection point (same reference)
    }
    longer = longer.next;
    shorter = shorter.next;
  }

  return null; // No intersection
}
