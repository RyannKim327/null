function ListNode(val) {
  this.val = val;
  this.next = null;
}

function findMiddleElement(head) {
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return slow.val;
}
