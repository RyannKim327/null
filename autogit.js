function hasCycle(head) {
  if (!head || !head.next) {
    return false; // If the list is empty or has only one node, there can't be a cycle
  }

  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true; // The pointers meet, indicating a cycle
    }
  }

  return false; // The hare reaches the end of the list without meeting the tortoise, indicating no cycle
}
// Define the linked list with the nodes
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create the linked list
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Create a cycle in the linked list
node5.next = node2;

// Check if the linked list contains a cycle
console.log(hasCycle(head)); // Output: true
