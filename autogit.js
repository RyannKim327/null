function hasCycle(head) {
  if (head === null || head.next === null) {
    return false; // Empty list or single node, so no cycle
  }
  
  let slow = head; // Tortoise
  let fast = head.next; // Hare
  
  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true; // Cycle detected
    }
    
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return false; // No cycle found
}
