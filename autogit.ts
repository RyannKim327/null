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

    // Calculate lengths of both lists
    let lenA = 0;
    let lenB = 0;

    while (currA) {
        lenA++;
        currA = currA.next;
    }

    while (currB) {
        lenB++;
        currB = currB.next;
    }

    // Reset pointers
    currA = headA;
    currB = headB;

    // Skip the extra nodes in the longer list
    while (lenA > lenB) {
        currA = currA?.next || null;
        lenA--;
    }

    while (lenB > lenA) {
        currB = currB?.next || null;
        lenB--;
    }

    // Traverse both lists to find the intersection
    while (currA && currB) {
        if (currA === currB) {
            return currA; // Intersection found
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null; // No intersection
}
const listA = new ListNode(1);
const listB = new ListNode(2);
const intersection = new ListNode(3);
listA.next = new ListNode(4);
listA.next.next = intersection;
listB.next = intersection;
intersection.next = new ListNode(5);

const result = getIntersectionNode(listA, listB);
console.log(result?.value); // Output: 3
