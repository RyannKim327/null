class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddleElement(head) {
  if (!head) {
    return null; // Empty list
  }

  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr.value;
}

// Example usage:
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(list)); // Output: 3
