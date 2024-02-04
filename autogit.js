function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function findLinkedListLength(head) {
  let count = 0;
  let currentNode = head;

  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }

  return count;
}

// Example usage:
const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);

node1.next = node2;
node2.next = node3;

const length = findLinkedListLength(node1);
console.log(length); // Output: 3
