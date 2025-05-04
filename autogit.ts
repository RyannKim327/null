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

    let currA: ListNode | null = headA;
    let currB: ListNode | null = headB;

    // Calculate the lengths of both lists
    let lengthA = 0;
    let lengthB = 0;

    while (currA) {
        lengthA++;
        currA = currA.next;
    }

    while (currB) {
        lengthB++;
        currB = currB.next;
    }

    // Reset pointers to the start of each list
    currA = headA;
    currB = headB;

    // If one list is longer, advance its pointer by the length difference
    const lengthDifference = Math.abs(lengthA - lengthB);
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthDifference; i++) {
            currA = currA?.next || null;
        }
    } else {
        for (let i = 0; i < lengthDifference; i++) {
            currB = currB?.next || null;
        }
    }

    // Move both pointers until they collide or reach the end
    while (currA && currB) {
        if (currA === currB) {
            return currA; // Intersection found
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null; // No intersection
}
// Example usage
const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeB1 = new ListNode(3);
const intersectionNode = new ListNode(4);
const nodeB2 = new ListNode(5);
const nodeB3 = new ListNode(6);

nodeA1.next = nodeA2;
nodeA2.next = intersectionNode;

nodeB1.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = intersectionNode;

// Find the intersection
const intersection = getIntersectionNode(nodeA1, nodeB1);
console.log(intersection?.value); // Should log 4 if the intersection is found
