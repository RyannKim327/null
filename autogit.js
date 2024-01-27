class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findNthNodeFromEnd(head, n) {
  let slowPtr = head;
  let fastPtr = head;

  // Move fastPtr n positions ahead
  for (let i = 0; i < n; i++) {
    if (fastPtr === null) {
      return null; // n is greater than the length of the list
    }
    fastPtr = fastPtr.next;
  }

  // Move both pointers one position at a time
  while (fastPtr !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  return slowPtr;
}
