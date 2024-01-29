function ListNode(value, next) {
  this.value = value;
  this.next = next;
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next; // temporarily store the next node
    current.next = prev; // reverse the next pointer

    // move prev and current to the next nodes
    prev = current;
    current = next;
  }

  // update the head to point to the new first node
  head = prev;

  return head; // return the reversed linked list
}
function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  return head;
}

// Create the original linked list
const node3 = new ListNode(3, null);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Reverse the linked list
const reversed = reverseLinkedList(node1);

// Print the reversed linked list
let currentNode = reversed;
while (currentNode != null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
