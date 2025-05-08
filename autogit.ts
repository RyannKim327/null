class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

function getLength<T>(head: ListNode<T> | null): number {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}

function getIntersectionNode<T>(
  headA: ListNode<T> | null,
  headB: ListNode<T> | null
): ListNode<T> | null {
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  // Advance the head pointer of the longer list by the difference in lengths
  while (lengthA > lengthB && headA !== null) {
    headA = headA.next;
    lengthA--;
  }
  while (lengthB > lengthA && headB !== null) {
    headB = headB.next;
    lengthB--;
  }

  // Move both pointers forward until they meet
  while (headA !== null && headB !== null) {
    if (headA === headB) {
      return headA; // Intersection found
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null; // No intersection
}
