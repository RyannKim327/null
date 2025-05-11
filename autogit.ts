class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
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

  // Align start points
  while (lenA > lenB && headA) {
    headA = headA.next;
    lenA--;
  }
  while (lenB > lenA && headB) {
    headB = headB.next;
    lenB--;
  }

  // Traverse both lists in tandem
  while (headA && headB) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
  return null;
}
