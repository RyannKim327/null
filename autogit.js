class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findMiddleElement(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
