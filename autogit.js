function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }
  
  let slow = head;
  let fast = head.next;
  
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }
    
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return true;
}
// Definition for a linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create a linked list with a cycle
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // This creates a cycle

console.log(hasCycle(head)); // Output: true
