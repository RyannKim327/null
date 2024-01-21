function hasCycle(head) {
  if (!head || !head.next) {
    return false; // If the list is empty or only has one node, there can't be a cycle
  }

  let slow = head; // Slow pointer moves one node at a time
  let fast = head.next; // Fast pointer moves two nodes at a time

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false; // If the fast pointer reaches the end of the list, there is no cycle
    }

    slow = slow.next; // Move the slow pointer one node ahead
    fast = fast.next.next; // Move the fast pointer two nodes ahead
  }

  return true; // If the slow and fast pointers meet, there is a cycle
}
const node1 = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };
const node4 = { value: 4, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle by pointing the last node to node2
console.log(hasCycle(node1)); // Output: true
