class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const nodes = new Set<ListNode>();
    let currentA = headA;

    // Traverse list A and store the nodes in a set
    while (currentA !== null) {
        nodes.add(currentA);
        currentA = currentA.next;
    }

    let currentB = headB;

    // Traverse list B and check if any node is in the set
    while (currentB !== null) {
        if (nodes.has(currentB)) {
            return currentB; // Intersection found
        }
        currentB = currentB.next;
    }

    return null; // No intersection
}
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = (pointerA !== null) ? pointerA.next : headB;
        pointerB = (pointerB !== null) ? pointerB.next : headA;
    }

    return pointerA;
}
