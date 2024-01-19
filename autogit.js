function hasCycle(head) {
  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true; // Cycle found
    }
  }

  return false; // No cycle found
}
// Example linked list with a cycle
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
node1.next = node2;
node2.next = node3;
node3.next = node2;

console.log(hasCycle(node1)); // Output: true

// Example linked list without a cycle
const node4 = { value: 4 };
const node5 = { value: 5 };
node4.next = node5;

console.log(hasCycle(node4)); // Output: false
