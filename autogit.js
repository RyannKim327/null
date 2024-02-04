// Define a Node class
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Function to find the middle element
function findMiddleElement(head) {
  let slow = head;
  let fast = head;

  // Move 'fast' pointer at twice the speed of 'slow' pointer
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 'slow' pointer will be at the middle element
  return slow.value;
}

// Create a sample linked list
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Call the function to find the middle element
const middleElement = findMiddleElement(node1);
console.log(middleElement);
