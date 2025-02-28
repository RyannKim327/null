class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    constructor() {
        this.head = null;
    }

    append(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let ptrA: ListNode | null = headA;
    let ptrB: ListNode | null = headB;

    // Get lengths of both linked lists
    const lengthA = getLength(ptrA);
    const lengthB = getLength(ptrB);

    // Align the start of both lists
    if (lengthA > lengthB) {
        ptrA = advanceList(ptrA, lengthA - lengthB);
    } else {
        ptrB = advanceList(ptrB, lengthB - lengthA);
    }

    // Traverse both lists and search for intersection
    while (ptrA !== ptrB) {
        ptrA = ptrA?.next || null;
        ptrB = ptrB?.next || null;
    }

    return ptrA;  // Either the intersection node or null
}

// Helper function to calculate length of linked list
function getLength(head: ListNode | null): number {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}

// Helper function to advance the pointer by n steps
function advanceList(head: ListNode | null, steps: number): ListNode | null {
    while (steps-- > 0 && head) {
        head = head.next;
    }
    return head;
}

// Example usage:
const listA = new LinkedList();
const listB = new LinkedList();

// Add nodes to listA
listA.append(1);
listA.append(2);
const intersectionNode = new ListNode(3);
listA.head!.next!.next = intersectionNode; // Create intersection
listA.append(4);
listA.append(5);

// Add nodes to listB
listB.append(6);
listB.append(7);
listB.head!.next!.next = intersectionNode; // Pointing to the same intersection node

const intersection = getIntersectionNode(listA.head, listB.head);
console.log(intersection); // Should log the intersection node with value 3
