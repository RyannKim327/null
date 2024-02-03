function getLinkedListLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
const myList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

const length = getLinkedListLength(myList);
console.log(length); // Output: 3
