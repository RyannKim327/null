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

    let aPointer: ListNode | null = headA;
    let bPointer: ListNode | null = headB;

    // Traverse both lists
    while (aPointer !== bPointer) {
        // If aPointer reaches the end of list A, redirect it to the start of list B
        aPointer = aPointer ? aPointer.next : headB;

        // If bPointer reaches the end of list B, redirect it to the start of list A
        bPointer = bPointer ? bPointer.next : headA;
    }

    // Either both are null (no intersection) or they point to the intersection node
    return aPointer; // Or bPointer, since they are equal at this point
}
// Create linked lists (Example)
// List A: 1 -> 2 -> 3
// List B: 4 -> 5 -> 3 (intersection)
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node3; // Intersection point is at node3

const intersectionNode = getIntersectionNode(node1, node4);
console.log(intersectionNode ? intersectionNode.value : "No intersection"); // Output: 3
