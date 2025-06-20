class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let ptrA: ListNode | null = headA;
    let ptrB: ListNode | null = headB;

    // Traverse both lists
    while (ptrA !== ptrB) {
        // Move to the next node or switch to the other list's head
        ptrA = ptrA === null ? headB : ptrA.next;
        ptrB = ptrB === null ? headA : ptrB.next;
    }

    // Either both are null (no intersection) or both point to the intersection node
    return ptrA;
}
// Helper function to create a linked list from an array
function createList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the list values
function printList(head: ListNode | null): void {
    const vals: number[] = [];
    let current = head;
    while (current !== null) {
        vals.push(current.val);
        current = current.next;
    }
    console.log(vals.join(" -> "));
}

// Create two lists that intersect
const common = createList([8, 10]);

const listA = createList([4, 1]);
let tailA = listA;
while (tailA && tailA.next) {
    tailA = tailA.next;
}
if (tailA) {
    tailA.next = common;
}

const listB = createList([5, 6, 1]);
let tailB = listB;
while (tailB && tailB.next) {
    tailB = tailB.next;
}
if (tailB) {
    tailB.next = common;
}

console.log("List A:");
printList(listA); // Output: 4 -> 1 -> 8 -> 10

console.log("List B:");
printList(listB); // Output: 5 -> 6 -> 1 -> 8 -> 10

// Find the intersection
const intersection = getIntersectionNode(listA, listB);
if (intersection) {
    console.log(`Intersection at node with value: ${intersection.val}`); // Output: 8
} else {
    console.log("No intersection found.");
}
List A:
4 -> 1 -> 8 -> 10
List B:
5 -> 6 -> 1 -> 8 -> 10
Intersection at node with value: 8
function getIntersectionNodeWithSet(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const seen = new Set<ListNode>();
    let ptrA = headA;
    
    // Store all nodes of list A in the set
    while (ptrA !== null) {
        seen.add(ptrA);
        ptrA = ptrA.next;
    }
    
    // Traverse list B and check for intersection
    let ptrB = headB;
    while (ptrB !== null) {
        if (seen.has(ptrB)) {
            return ptrB;
        }
        ptrB = ptrB.next;
    }
    
    return null;
}
