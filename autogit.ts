class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    // Helper to get length of a list
    const getLength = (head: ListNode | null): number => {
        let length = 0;
        let current = head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    };

    let lenA = getLength(headA);
    let lenB = getLength(headB);

    // Align starts
    while (lenA > lenB) {
        headA = headA!.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB!.next;
        lenB--;
    }

    // Move both pointers until they collide or reach end
    while (headA !== headB) {
        headA = headA!.next;
        headB = headB!.next;
    }

    return headA;  // Can be null or the intersection node
}
