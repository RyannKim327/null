class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) {
        return null;
    }

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    // Traverse both lists until they meet or both reach the end
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;  // Switch to the other list or null
        pointerB = pointerB ? pointerB.next : headA;  // Switch to the other list or null
    }

    // Either they met at intersection or both are null
    return pointerA; 
}
// Create two intersecting linked lists
const common = new ListNode(8);
common.next = new ListNode(4);
common.next.next = new ListNode(5);

const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = common;

const listB = new ListNode(5);
listB.next = new ListNode(0);
listB.next.next = new ListNode(1);
listB.next.next.next = common;

// Find intersection
const intersectionNode = getIntersectionNode(listA, listB);
if (intersectionNode) {
    console.log("Intersection at node with value:", intersectionNode.value);  // Output: Intersection at node with value: 8
} else {
    console.log("No intersection.");
}
