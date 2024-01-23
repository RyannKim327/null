function findMiddleElement(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
// Example usage
const head = createLinkedList([1, 2, 3, 4, 5]);
const middleElement = findMiddleElement(head);
console.log(middleElement.value); // Output: 3
function createLinkedList(values) {
  if (!values.length) {
    return null;
  }

  const head = { value: values[0], next: null };
  let current = head;
  
  for (let i = 1; i < values.length; i++) {
    const newNode = { value: values[i], next: null };
    current.next = newNode;
    current = newNode;
  }

  return head;
}
