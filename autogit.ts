class ListNode {
    val: any;
    next: ListNode | null;

    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    while (pointerA !== pointerB) {
        pointerA = (pointerA !== null) ? pointerA.next : headB;
        pointerB = (pointerB !== null) ? pointerB.next : headA;
    }

    return pointerA; // or null if no intersection
}
