function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function getLinkedListLength(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}

// Example usage:
const node1 = new LinkedListNode(5);
const node2 = new LinkedListNode(10);
const node3 = new LinkedListNode(15);

node1.next = node2;
node2.next = node3;

const length = getLinkedListLength(node1);
console.log(length); // Output: 3
