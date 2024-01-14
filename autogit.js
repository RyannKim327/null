class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddleElement(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr != null && fastPtr.next != null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr.value;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(head)); // Output: 3
