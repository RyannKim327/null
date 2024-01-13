function ListNode(val) {
  this.val = val;
  this.next = null;
}

function findMiddle(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr !== null && fastPtr.next !== null) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }

  return slowPtr.val;
}
