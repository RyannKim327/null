function hasCycle(head) {
  // The "slow" pointer moves one node at a time
  let slow = head;
  // The "fast" pointer moves two nodes at a time
  let fast = head;

  // Iterate until either "fast" reaches the end of the list (no cycle)
  // or "fast" meets "slow" (cycle exists)
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If the two pointers meet, a cycle exists
    if (slow === fast) {
      return true;
    }
  }

  // No cycle found
  return false;
}
const listWithCycle = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};
listWithCycle.next.next.next = listWithCycle;

const listWithoutCycle = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(hasCycle(listWithCycle)); // Output: true
console.log(hasCycle(listWithoutCycle)); // Output: false
