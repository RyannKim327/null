class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
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
    if (headA === null || headB === null) {
        return null;
    }

    const lenA = getLength(headA);
    const lenB = getLength(headB);

    let currentA = headA;
    let currentB = headB;

    // Advance the pointer for the longer list
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            currentA = currentA.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            currentB = currentB.next;
        }
    }

    // Traverse both lists and find the intersection
    while (currentA !== null && currentB !== null) {
        if (currentA === currentB) {
            return currentA; // Intersection found
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection found
}

// Example Usage
const intersectNode = new ListNode(8);
const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = intersectNode;

const listB = new ListNode(5);
listB.next = new ListNode(0);
listB.next.next = new ListNode(1);
listB.next.next.next = intersectNode;

const intersection = getIntersectionNode(listA, listB);
console.log(intersection ? intersection.value : 'No intersection'); // Output: 8
