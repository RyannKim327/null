function hasCycle(head) {
    if (!head || !head.next) {
        return false; // Empty list or single node, no cycle
    }
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; // Reached end of list, no cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true; // Cycle detected
}
