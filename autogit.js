class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findIntersection(list1, list2) {
    let seenNodes = new Set();
    
    while (list1) {
        seenNodes.add(list1);
        list1 = list1.next;
    }
    
    while (list2) {
        if (seenNodes.has(list2)) {
            return list2;
        }
        list2 = list2.next;
    }
    
    return null;
}

// Example usage:
// Construct two linked lists
let commonNode = new Node(8);
let list1 = new Node(3);
list1.next = new Node(6);
list1.next.next = new Node(9);
list1.next.next.next = commonNode;

let list2 = new Node(2);
list2.next = commonNode;

// Find the intersection of the two lists
const intersection = findIntersection(list1, list2);

if (intersection) {
    console.log("Intersection found at node with data: " + intersection.data);
} else {
    console.log("No intersection found");
}
