class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let set = new Set();

    // Traverse the first linked list and store nodes in the Set
    let current = headA;
    while (current) {
        set.add(current);
        current = current.next;
    }

    // Traverse the second linked list and check for intersection
    current = headB;
    while (current) {
        if (set.has(current)) {
            // Intersection node found
            return current;
        }
        current = current.next;
    }

    // No intersection found
    return null;
}

// Example usage
// Create linked list 1: 1 -> 2 -> 3 -> 4 -> 5
let listA = new ListNode(1);
listA.next = new ListNode(2);
listA.next.next = new ListNode(3);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

// Create linked list 2: 6 -> 4 -> 5
let listB = new ListNode(6);
listB.next = listA.next.next.next;
listB.next.next = listA.next.next.next.next;

// Find the intersection node
let intersectionNode = getIntersectionNode(listA, listB);

console.log(intersectionNode); // This will output the intersecting node if it exists
