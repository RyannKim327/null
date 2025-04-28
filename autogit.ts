class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    append(val: number) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let aPointer: ListNode | null = headA;
    let bPointer: ListNode | null = headB;

    // Traverse through both lists, once reaching the end switch to the head of the other list
    while (aPointer !== bPointer) {
        aPointer = aPointer ? aPointer.next : headB;
        bPointer = bPointer ? bPointer.next : headA;
    }

    // Either both pointers meet at the intersection node or both are null (no intersection)
    return aPointer;
}

// Example usage:

const listA = new LinkedList();
const listB = new LinkedList();

// Create first linked list: 1 -> 3 -> 5
listA.append(1);
listA.append(3);
listA.append(5);

// Create second linked list: 2 -> 4 and then intersects with listA at node with value 5
listB.append(2);
listB.append(4);

// Manually link the end of listB to the node of listA to create an intersection
if (listA.head) {
    let current = listA.head;
    while (current.next) {
        current = current.next;
    }
    current.next = listB.head!.next!.next; // Make the intersection point at value 5
}

// Find intersection
const intersectionNode = getIntersectionNode(listA.head, listB.head);
console.log(intersectionNode ? intersectionNode.val : "No intersection");
