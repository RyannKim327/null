function getIntersectionNode(headA, headB) {
    let set = new Set();
    
    let currA = headA;
    while (currA) {
        set.add(currA);
        currA = currA.next;
    }
    
    let currB = headB;
    while (currB) {
        if (set.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }
    
    return null; // If no intersection is found
}
