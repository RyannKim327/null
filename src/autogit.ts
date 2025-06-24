class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let p1: ListNode | null = headA;
    let p2: ListNode | null = headB;

    // Traverse both lists
    while (p1 !== p2) {
        // Move p1 to the next node or reset to headB if at the end
        p1 = p1 === null ? headB : p1.next;

        // Move p2 to the next node or reset to headA if at the end
        p2 = p2 === null ? headA : p2.next;
    }

    // Either p1 and p2 meet at the intersection node or both are null
    return p1;
}
// Create intersecting lists
const common = new ListNode(8, new ListNode(10));
const headA = new ListNode(3, new ListNode(7, common));
const headB = new ListNode(99, new ListNode(1, common));

// Find intersection
const intersectionNode = getIntersectionNode(headA, headB);
console.log(intersectionNode?.val); // Output: 8
