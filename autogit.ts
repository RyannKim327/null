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

    let a: ListNode | null = headA;
    let b: ListNode | null = headB;

    // Calculate the lengths of both linked lists
    let lenA = 0;
    let lenB = 0;

    while (a) {
        lenA++;
        a = a.next;
    }

    while (b) {
        lenB++;
        b = b.next;
    }

    // Reset pointers to the head of each list
    a = headA;
    b = headB;

    // Advance the pointer for the longer list
    while (lenA > lenB) {
        a = a?.next || null;
        lenA--;
    }

    while (lenB > lenA) {
        b = b?.next || null;
        lenB--;
    }

    // Now traverse both lists together to find the intersection
    while (a && b) {
        if (a === b) {
            return a; // Found intersection
        }
        a = a.next;
        b = b.next;
    }

    return null; // No intersection found
}

// Example Usage
const intersectionNode = new ListNode(8);
const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = intersectionNode;

const listB = new ListNode(5);
listB.next = new ListNode(0);
listB.next.next = new ListNode(1);
listB.next.next.next = intersectionNode;

const intersection = getIntersectionNode(listA, listB);
if (intersection) {
    console.log("Intersection at node with value:", intersection.val);
} else {
    console.log("No intersection.");
}
