function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function findMiddleElement(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5);

// Find the middle element
const middleElement = findMiddleElement(head);
console.log(middleElement.value); // Output: 3
