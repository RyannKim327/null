class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function getLength(head: ListNode | null): number {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let lenA = getLength(headA);
  let lenB = getLength(headB);

  // Align starting points
  while (lenA > lenB) {
    headA = headA!.next;
    lenA--;
  }
  while (lenB > lenA) {
    headB = headB!.next;
    lenB--;
  }

  // Move both pointers and check for intersection
  while (headA && headB) {
    if (headA === headB) {
      return headA; // Intersection found
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null; // No intersection
}
