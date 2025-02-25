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

    while (pointerA !== pointerB) {
        // When reaching the end of one list, redirect it to the head of the other
        // This helps in getting to the intersection point if they intersect
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }
    
    // Either pointerA or pointerB can be the intersection node or null
    return pointerA; 
}

// Example usage:
// Create two linked lists that intersect
const intersectingNode = new ListNode(8);
intersectingNode.next = new ListNode(4);
intersectingNode.next.next = new ListNode(5);

const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = intersectingNode;

const listB = new ListNode(5);
listB.next = new ListNode(0);
listB.next.next = new ListNode(1);
listB.next.next.next = intersectingNode;

const intersection = getIntersectionNode(listA, listB);
console.log(intersection ? intersection.value : 'No intersection');
