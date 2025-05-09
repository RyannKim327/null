class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function getLength(head: ListNode | null): number {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const lenA = getLength(headA);
  const lenB = getLength(headB);

  let curA = headA;
  let curB = headB;

  // Advance the pointer of the longer list by the difference in lengths
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      curA = curA!.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      curB = curB!.next;
    }
  }

  // Move both pointers in sync looking for intersection node
  while (curA !== null && curB !== null) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }

  return null;
}
