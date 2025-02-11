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

    while (current) {
        length++;
        current = current.next;
    }

    return length;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) {
        return null; // If either list is empty, there is no intersection
    }

    const lengthA = getLength(headA);
    const lengthB = getLength(headB);

    let currentA = headA;
    let currentB = headB;

    // Align both pointers to the same starting point
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentA = currentA.next;
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentB = currentB.next;
        }
    }

    // Move both pointers until they either collide or reach the end
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Found the intersection
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection
}
// Create linked list A: 1 -> 2 -> 3 -> 4
const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
a1.next = a2;
a2.next = a3;
a3.next = a4;

// Create linked list B: 6 -> 7 -> 3 -> 4 (intersects at node 3)
const b1 = new ListNode(6);
const b2 = new ListNode(7);
b1.next = b2;
b2.next = a3; // b1 and b2 point to the same node as a3

const intersectionNode = getIntersectionNode(a1, b1);

if (intersectionNode) {
    console.log(`Intersecting node value: ${intersectionNode.value}`); // Output: 3
} else {
    console.log("No intersection found.");
}
