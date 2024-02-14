function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle found
}
// Define a linked list with a cycle
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second; // Cycle point to the second node

console.log(hasCycle(head)); // Output: true
