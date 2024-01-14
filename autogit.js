class ListNode {
  constructor(value) {
    this.value = value;
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

  return slow.value;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(list)); // Output: 3 (middle element)
