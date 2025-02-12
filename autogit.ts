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
    if (!headA || !headB) return null;

    const lengthA = getLength(headA);
    const lengthB = getLength(headB);

    let currentA: ListNode | null = headA;
    let currentB: ListNode | null = headB;

    // Align the starting points
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentA = currentA!.next; // Use non-null assertion since we checked for null
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentB = currentB!.next;
        }
    }

    // Traverse both lists to find the intersection
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Intersection found
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection
}

// Example usage:
const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeB1 = new ListNode(3);
const intersectionNode = new ListNode(4);
const nodeA3 = new ListNode(5);
const nodeB2 = new ListNode(6);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = intersectionNode;

nodeB1.next = intersectionNode;
nodeB2.next = nodeB1;

const intersection = getIntersectionNode(nodeA1, nodeB2);
console.log(intersection ? intersection.value : "No intersection");
