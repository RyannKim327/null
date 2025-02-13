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

    // Traverse the lists
    while (pointerA !== pointerB) {
        // Move to the next node or switch to the other list's head
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    // Either the intersection node or null (if no intersection)
    return pointerA;
}

// Example usage:
// Creating two intersecting linked lists
let common = new ListNode(8);
common.next = new ListNode(4);
common.next.next = new ListNode(5);

let listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = common; // List A: 4 -> 1 -> 8 -> 4 -> 5

let listB = new ListNode(5);
listB.next = new ListNode(0);
listB.next.next = new ListNode(1);
listB.next.next.next = common; // List B: 5 -> 0 -> 1 -> 8 -> 4 -> 5

const intersectionNode = getIntersectionNode(listA, listB);
if (intersectionNode) {
    console.log("Intersection at node with value:", intersectionNode.value);
} else {
    console.log("No intersection.");
}
