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
    const lengthA = getLength(headA);
    const lengthB = getLength(headB);

    // Align the start
    let currentA: ListNode | null = headA;
    let currentB: ListNode | null = headB;

    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentA = currentA!.next; // Non-null assertion
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentB = currentB!.next; // Non-null assertion
        }
    }

    // Move both pointers until they find the intersection or both become null
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Intersection found
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection
}

// Example Usage
const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeB1 = new ListNode(3);
const nodeB2 = new ListNode(4);

nodeA1.next = nodeA2;
nodeB1.next = nodeB2;
nodeB2.next = nodeA2; // Create an intersection

const intersection = getIntersectionNode(nodeA1, nodeB1);
console.log(intersection ? intersection.value : 'No intersection'); // Output: 2
