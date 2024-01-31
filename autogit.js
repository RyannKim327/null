function hasCycle(head) {
  if (!head || !head.next) {
    return false; // The list is empty or has only one node, so there can't be a cycle
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Moves one step at a time
    fast = fast.next.next; // Moves two steps at a time

    if (slow === fast) {
      return true; // The two pointers meet, so there's a cycle
    }
  }

  return false; // The fast pointer reaches the end of the list without meeting the slow pointer, so there's no cycle
}
// Example usage:
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
const node4 = { value: 4 };
node1.next = node2;
node2.next = node3;
node3.next = node4;
// To create a cycle, uncomment the following line:
// node4.next = node2;

console.log(hasCycle(node1)); // Output: false (no cycle)
