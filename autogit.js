function hasCycle(head) {
  // The input head is the first node of the linked list
  
  // Initialize two pointers: slow and fast
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    // Move slow pointer by 1 node
    slow = slow.next;
    // Move fast pointer by 2 nodes
    fast = fast.next.next;
    
    // If the slow and fast pointers meet, there is a cycle
    if (slow === fast) {
      return true;
    }
  }
  
  // No cycle found
  return false;
}
// Example usage
const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log(hasCycle(linkedList));  // Output: false
