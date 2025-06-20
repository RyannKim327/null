List A: 1 -> 2 -> 3 \
                     -> 7 -> 8
List B:      4 -> 5 /
// Definition for a singly-linked list node.
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // Edge case: If either list is empty, there is no intersection.
    if (!headA || !headB) return null;

    let pA: ListNode | null = headA;
    let pB: ListNode | null = headB;

    // Traverse both lists until the pointers meet or both reach null.
    while (pA !== pB) {
        // Move pointer A. If it reaches the end, redirect it to headB.
        pA = pA === null ? headB : pA.next;

        // Move pointer B. If it reaches the end, redirect it to headA.
        pB = pB === null ? headA : pB.next;
    }

    // Either both pointers meet at the intersection node, or both are null.
    return pA;
}
// Helper function to create a linked list from an array.
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Example usage.
const common = createLinkedList([7, 8]); // Shared part of the lists.

const headA = createLinkedList([1, 2, 3]);
let tailA = headA;
while (tailA?.next) tailA = tailA.next;
if (tailA) tailA.next = common; // Connect list A to the shared part.

const headB = createLinkedList([4, 5]);
let tailB = headB;
while (tailB?.next) tailB = tailB.next;
if (tailB) tailB.next = common; // Connect list B to the shared part.

const intersection = getIntersectionNode(headA, headB);
console.log(intersection?.val); // Output: 7 (intersection node value)
