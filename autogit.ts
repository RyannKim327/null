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

  // Helper to get length of list
  const getLength = (head: ListNode | null): number => {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  // Align both pointers at the same remaining distance from the tail
  while (lenA > lenB) {
    headA = headA!.next;
    lenA--;
  }
  while (lenB > lenA) {
    headB = headB!.next;
    lenB--;
  }

  // Move both pointers in tandem to find intersection
  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }

  // No intersection found
  return null;
}
