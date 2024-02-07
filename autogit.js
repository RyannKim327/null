function findMiddleElement(head) {
  let slowPtr = head;  // Pointer that moves one node at a time
  let fastPtr = head;  // Pointer that moves two nodes at a time

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;         // Move slow pointer by one step
    fastPtr = fastPtr.next.next;    // Move fast pointer by two steps
  }

  return slowPtr;  // Return the middle element
}
const linkedList = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } };
const middleNode = findMiddleElement(linkedList);
console.log(middleNode);  // Output: { value: 3, next: { value: 4, next: { value: 5, next: null } } }
