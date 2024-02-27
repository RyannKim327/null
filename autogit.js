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
