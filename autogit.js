function hasCycle(head) {
  if (!head || !head.next) {
    return false; // Empty list or only one node, no cycle
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false; // Reached end of list, no cycle
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true; // Found a cycle
}
const head = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };

head.next = node2;
node2.next = node3;
node3.next = head; // Creating a cycle

console.log(hasCycle(head)); // Output: true
