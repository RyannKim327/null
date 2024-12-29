function hasCycle(head):
    if head is NULL:
        return false
    
    // Initialize two pointers
    slow_ptr = head
    fast_ptr = head
    
    while fast_ptr is not NULL and fast_ptr.next is not NULL:
        slow_ptr = slow_ptr.next
        fast_ptr = fast_ptr.next.next
        
        if slow_ptr is equal to fast_ptr:
            return true
    
    return false
