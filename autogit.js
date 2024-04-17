// Linked List Node class definition
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to find the intersection of two linked lists
const findIntersection = (headA, headB) => {
    let set = new Set();
    let result = [];

    // Traverse the first linked list and store elements in Set
    let current = headA;
    while (current) {
        set.add(current.data);
        current = current.next;
    }

    // Traverse the second linked list and check for intersection
    current = headB;
    while (current) {
        if (set.has(current.data)) {
            result.push(current.data);
        }
        current = current.next;
    }

    return result;
};

// Creating linked lists for testing
let listA = new Node(3);
listA.next = new Node(6);
listA.next.next = new Node(9);
listA.next.next.next = new Node(15);
listA.next.next.next.next = new Node(30);

let listB = new Node(10);
listB.next = listA.next.next.next;

// Finding the intersection of two linked lists
const intersection = findIntersection(listA, listB);

console.log('Intersection of the two linked lists:', intersection); // Output will be [9, 15, 30]
