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

  // Helper to get length of linked list
  function getLength(head: ListNode | null): number {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }

  const lenA = getLength(headA);
  const lenB = getLength(headB);

  // Advance the longer list by the difference in lengths
  let longer = lenA > lenB ? headA : headB;
  let shorter = lenA > lenB ? headB : headA;
  let diff = Math.abs(lenA - lenB);

  while (diff > 0 && longer) {
    longer = longer.next;
    diff--;
  }

  // Move both pointers until intersection or end
  while (longer && shorter) {
    if (longer === shorter) {
      return longer;  // Intersection found
    }
    longer = longer.next;
    shorter = shorter.next;
  }

  return null;  // No intersection
}
