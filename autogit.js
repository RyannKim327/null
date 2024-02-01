function hasCycle(head) {
  if (!head || !head.next) {
    // If the list is empty or has only one node, there can't be a cycle
    return false;
  }

  let tortoise = head;
  let hare = head.next;

  while (tortoise !== hare) {
    if (!hare || !hare.next) {
      // If the hare reaches the end of the list, there is no cycle
      return false;
    }

    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  // If the tortoise and hare pointers meet, there is a cycle
  return true;
}
// Example linked list with a cycle
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
node1.next = node2;
node2.next = node3;
node3.next = node1;

console.log(hasCycle(node1)); // Output: true

// Example linked list without a cycle
const node4 = { value: 4 };
const node5 = { value: 5 };
const node6 = { value: 6 };
node4.next = node5;
node5.next = node6;

console.log(hasCycle(node4)); // Output: false
