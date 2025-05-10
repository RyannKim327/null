class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;

  let lenA = 0, lenB = 0;
  let currA: ListNode | null = headA;
  let currB: ListNode | null = headB;

  // Compute lengths of both lists
  while (currA) {
    lenA++;
    currA = currA.next;
  }
  while (currB) {
    lenB++;
    currB = currB.next;
  }

  // Reset pointers to heads
  currA = headA;
  currB = headB;

  // Advance the longer list by the difference in lengths
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      currA = currA!.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      currB = currB!.next;
    }
  }

  // Move both pointers until they meet or reach the end
  while (currA && currB) {
    if (currA === currB) return currA;
    currA = currA.next;
    currB = currB.next;
  }

  return null;
}
