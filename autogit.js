class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}

// Example usage
const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = new ListNode(8);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

const listB = new ListNode(5);
listB.next = new ListNode(0);
listB.next.next = listA.next.next; // Intersection point

const intersectionNode = getIntersectionNode(listA, listB);
console.log(intersectionNode); // Output: ListNode { val: 8, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }
