function ListNode(val) {
  this.val = val;
  this.next = null;
}

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
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;
// Uncomment the line below to introduce a cycle
// node4.next = node2;

console.log(hasCycle(head)); // false
