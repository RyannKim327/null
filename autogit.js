function findLinkedListLength(head) {
  let currentNode = head;
  let length = 0;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
// Example linked list
let head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(findLinkedListLength(head)); // Output: 3
