class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    const set = new Set();

    // Traverse through the first linked list and store all node references in the Set
    let node = headA;
    while (node) {
        set.add(node);
        node = node.next;
    }

    // Traverse through the second linked list and check for intersection
    node = headB;
    while (node) {
        if (set.has(node)) {
            return node; // Intersection found
        }
        node = node.next;
    }

    return null; // No intersection found
}
