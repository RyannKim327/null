function hasCycle(head) {
  if (!head || !head.next) {
    // An empty list or a list with only one node cannot contain a cycle
    return false;
  }
  
  let slow = head; // Slow pointer moves one node at a time
  let fast = head.next; // Fast pointer moves two nodes at a time

  while (fast) {
    if (slow === fast) {
      // The pointers have met, indicating a cycle
      return true;
    }
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  // The fast pointer has reached the end, indicating no cycle
  return false;
}
const listWithCycle = { value: 1, next: {/* ... */} };
const listWithoutCycle = { value: 1, next: {/* ... */} };

listWithoutCycle.next = { value: 2, next: null };
listWithCycle.next = { value: 2, next: {/* ... */} };
// Make the last node in the list point back to an earlier node to create a cycle
listWithCycle.next.next = listWithCycle;

console.log(hasCycle(listWithCycle)); // true
console.log(hasCycle(listWithoutCycle)); // false
