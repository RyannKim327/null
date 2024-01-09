function findMiddleElement(head) {
  if (!head) {
    return null; // Empty linked list
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
const middleElement = findMiddleElement(head);
console.log(middleElement);
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
