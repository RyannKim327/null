function findMiddleElement(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr.value;
}
// Example linked list
const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

console.log(findMiddleElement(head)); // Output: 3
