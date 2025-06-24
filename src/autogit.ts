// Definition for singly-linked list node
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null; // If either list is empty, no intersection

    let pA: ListNode | null = headA;
    let pB: ListNode | null = headB;

    // Traverse both lists
    while (pA !== pB) {
        // Move to the next node or switch to the head of the other list
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    // Either both are null (no intersection) or both point to the intersection node
    return pA;
}
// Helper function to create a linked list from an array
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;

    const head = new ListNode(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print a linked list
function printLinkedList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result);
}

// Example usage
const common = new ListNode(8, new ListNode(10));
const listA = new ListNode(3, new ListNode(7, common));
const listB = new ListNode(99, new ListNode(1, common));

console.log("List A:");
printLinkedList(listA); // [3, 7, 8, 10]

console.log("List B:");
printLinkedList(listB); // [99, 1, 8, 10]

const intersectionNode = getIntersectionNode(listA, listB);
if (intersectionNode) {
    console.log(`Intersection at node with value: ${intersectionNode.val}`); // Output: 8
} else {
    console.log("No intersection found.");
}
