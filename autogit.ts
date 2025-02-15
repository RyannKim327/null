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

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    // Calculate the lengths of both lists
    let lengthA = 0;
    let lengthB = 0;

    while (pointerA) {
        lengthA++;
        pointerA = pointerA.next;
    }

    while (pointerB) {
        lengthB++;
        pointerB = pointerB.next;
    }

    // Reset pointers
    pointerA = headA;
    pointerB = headB;

    // Move pointer of the longer list ahead by the difference in lengths
    if (lengthA > lengthB) {
        let diff = lengthA - lengthB;
        while (diff > 0) {
            pointerA = pointerA!.next;
            diff--;
        }
    } else {
        let diff = lengthB - lengthA;
        while (diff > 0) {
            pointerB = pointerB!.next;
            diff--;
        }
    }

    // Move both pointers until they find the intersection or reach the end
    while (pointerA && pointerB) {
        if (pointerA === pointerB) {
            return pointerA; // Intersection found
        }
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }

    return null; // No intersection
}
