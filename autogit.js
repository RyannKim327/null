function hasCycle(head) {
  if (!head || !head.next) {
    return false; // No cycle if the list is empty or has only one node
  }
  
  let slow = head; // Tortoise
  let fast = head.next; // Hare
  
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false; // Reached the end, so no cycle
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return true; // Cycle found
}
// Example linked list with a cycle
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
node1.next = node2;
node2.next = node3;
node3.next = node1; // cycle

console.log(hasCycle(node1)); // true

// Example linked list without a cycle
const node4 = { value: 4 };
const node5 = { value: 5 };
const node6 = { value: 6 };
node4.next = node5;
node5.next = node6;

console.log(hasCycle(node4)); // false
