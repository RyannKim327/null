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
        return null; // If either list is empty, return null
    }

    const visitedNodes = new Set<ListNode>();

    // Traverse the first linked list and store all nodes in the set
    let currentA: ListNode | null = headA;
    while (currentA) {
        visitedNodes.add(currentA);
        currentA = currentA.next;
    }

    // Traverse the second linked list and check for intersections
    let currentB: ListNode | null = headB;
    while (currentB) {
        if (visitedNodes.has(currentB)) {
            return currentB; // Intersection found
        }
        currentB = currentB.next;
    }

    return null; // No intersection found
}
// Example to create intersected linked lists
const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const intersectingNode = new ListNode(3);
const nodeB1 = new ListNode(4);
const nodeB2 = new ListNode(5);

nodeA1.next = nodeA2;
nodeA2.next = intersectingNode;
nodeB1.next = nodeB2;
nodeB2.next = intersectingNode;

// Now nodeA1 & nodeB1 intersect at `intersectingNode`
const intersectionNode = getIntersectionNode(nodeA1, nodeB1);

if (intersectionNode) {
    console.log('Intersection Node Value:', intersectionNode.value); // Output: 3
} else {
    console.log('No intersection');
}
