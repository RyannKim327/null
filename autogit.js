function findIntersection(headA, headB) {
    let hash = new Set();
    
    let currA = headA;
    while (currA) {
        hash.add(currA);
        currA = currA.next;
    }
    
    let currB = headB;
    while (currB) {
        if (hash.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }
    
    return null;
}
function findIntersection(headA, headB) {
    let currA = headA;
    let currB = headB;
    
    while (currA !== currB) {
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }
    
    return currA;
}
