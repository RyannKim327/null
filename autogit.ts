class ListNode {
    value: any;
    next: ListNode | null;

    constructor(value: any, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function getLength(head: ListNode | null): number {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;

    const lenA = getLength(headA);
    const lenB = getLength(headB);

    let currA = headA;
    let currB = headB;

    // Advance pointer in longer list
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            if (currA) currA = currA.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            if (currB) currB = currB.next;
        }
    }

    // Traverse both lists together comparing references
    while (currA !== null && currB !== null) {
        if (currA === currB) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null; // No intersection
}
