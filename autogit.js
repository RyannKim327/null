class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
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
