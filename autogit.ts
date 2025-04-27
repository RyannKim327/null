class ListNode {
    val: number; // or any data type
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

function getLength(head: ListNode | null): number {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    return length;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    const lenA = getLength(headA);
    const lenB = getLength(headB);

    let currentA = headA;
    let currentB = headB;

    // Advance the longer list
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            currentA = currentA!.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            currentB = currentB!.next;
        }
    }

    // Move both pointers together until they meet
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA;
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null;
}
