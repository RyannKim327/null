class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getLinkedListLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
}
// Create a linked list example: 1 -> 2 -> 3 -> 4 -> null
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const length = getLinkedListLength(node1);
console.log(length); // Output: 4
