function hasCycle(head) {
  let slow = head; // the slower pointer
  let fast = head; // the faster pointer

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // move slow pointer by one node
    fast = fast.next.next; // move fast pointer by two nodes

    // If the two pointers meet, it means there is a cycle in the linked list
    if (slow === fast) {
      return true;
    }
  }
  
  return false; // if fast reaches the end of the list, it means there is no cycle
}
// Example usage
const linkedListWithCycle = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null // points back to the second node, creating a cycle
    }
  }
};

const linkedListWithoutCycle = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(hasCycle(linkedListWithCycle)); // Output: true
console.log(hasCycle(linkedListWithoutCycle)); // Output: false
