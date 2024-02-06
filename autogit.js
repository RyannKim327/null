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
const hasCycle = (head) => {
  // Implementation of the algorithm
}

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: { ... } // Can point to any other node in the linked list, creating a cycle
    }
  }
};

console.log(hasCycle(linkedList)); // Outputs: true or false
