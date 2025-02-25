class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    // Get the lengths of both lists
    let lenA = 0;
    let lenB = 0;
    let currentA = headA;
    let currentB = headB;

    while (currentA) {
        lenA++;
        currentA = currentA.next;
    }

    while (currentB) {
        lenB++;
        currentB = currentB.next;
    }

    // Align the starting points
    currentA = headA;
    currentB = headB;

    const diff = Math.abs(lenA - lenB);
    if (lenA > lenB) {
        for (let i = 0; i < diff; i++) {
            currentA = currentA!.next; // TypeScript non-null assertion
        }
    } else {
        for (let i = 0; i < diff; i++) {
            currentB = currentB!.next;
        }
    }

    // Traverse together to find the intersection
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Intersection found
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection
}
