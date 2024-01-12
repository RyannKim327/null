function findMiddleElement(head) {
  if (head === null) {
    return null; // Empty list
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next; // Move slow pointer by 1
    fastPointer = fastPointer.next.next; // Move fast pointer by 2
  }

  return slowPointer;
}
let middleElement = findMiddleElement(head);
