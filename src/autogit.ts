List A:  1 -> 2 -> 3
                    \
                     4 -> 5
                    /
List B:  6 -> 7

Intersection Node: 4
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
    // Edge case: If either list is empty, there's no intersection
    if (!headA || !headB) return null;

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    // Traverse both lists
    while (pointerA !== pointerB) {
        // Move pointerA forward; if it reaches the end, switch to headB
        pointerA = pointerA ? pointerA.next : headB;

        // Move pointerB forward; if it reaches the end, switch to headA
        pointerB = pointerB ? pointerB.next : headA;
    }

    // Either both pointers meet at the intersection node or both are null
    return pointerA;
}
// Helper function to create a linked list from an array
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

// Helper function to print a linked list
function printLinkedList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
const common = createLinkedList([4, 5]); // Shared part of the lists
const headA = createLinkedList([1, 2, 3]);
let tailA = headA;
while (tailA && tailA.next) tailA = tailA.next;
if (tailA) tailA.next = common; // Link list A to the common part

const headB = createLinkedList([6, 7]);
let tailB = headB;
while (tailB && tailB.next) tailB = tailB.next;
if (tailB) tailB.next = common; // Link list B to the common part

console.log("List A:");
printLinkedList(headA);

console.log("List B:");
printLinkedList(headB);

const intersectionNode = getIntersectionNode(headA, headB);
if (intersectionNode) {
    console.log(`Intersection Node Value: ${intersectionNode.val}`);
} else {
    console.log("No Intersection");
}
List A:
1 -> 2 -> 3 -> 4 -> 5
List B:
6 -> 7 -> 4 -> 5
Intersection Node Value: 4
No Intersection
