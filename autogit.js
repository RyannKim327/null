function getIntersectionNode(headA, headB) {
    let set = new Set();
    
    // Traverse the first linked list and store nodes in a Set
    while (headA !== null) {
        set.add(headA);
        headA = headA.next;
    }
    
    // Traverse the second linked list and check if each node is in the Set
    while (headB !== null) {
        if (set.has(headB)) {
            return headB; // Found the intersection
        }
        headB = headB.next;
    }
    
    return null; // No intersection found
}
