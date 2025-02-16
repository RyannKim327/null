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
    let lenA = 0, lenB = 0;
    while (pointerA) {
        lenA++;
        pointerA = pointerA.next;
    }
    while (pointerB) {
        lenB++;
        pointerB = pointerB.next;
    }

    // Reset pointers to the heads
    pointerA = headA;
    pointerB = headB;

    // Advance the pointer of the longer list by the difference in lengths
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            pointerA = pointerA!.next; // use non-null assertion operator ! safely
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            pointerB = pointerB!.next; // use non-null assertion operator ! safely
        }
    }

    // Move both pointers until an intersection is found
    while (pointerA && pointerB) {
        if (pointerA === pointerB) {
            return pointerA; // Intersection point
        }
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }

    return null; // No intersection
}

// Example usage
let intersection = new ListNode(8);
let listA = new ListNode(3);
listA.next = new ListNode(7);
listA.next.next = intersection;

let listB = new ListNode(5);
listB.next = new ListNode(10);
listB.next.next = intersection;

let intersectNode = getIntersectionNode(listA, listB);
console.log(intersectNode ? intersectNode.value : null); // Output: 8
