function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }

  let tortoise = head;
  let hare = head.next;

  while (tortoise !== hare) {
    if (!hare || !hare.next) {
      return false;
    }

    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return true;
}
// Example usage
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
const node4 = { value: 4 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle

console.log(hasCycle(node1)); // Output: true
