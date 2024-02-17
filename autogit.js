class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function getIntersectionNode(headA, headB) {
    let nodeSet = new Set();

    // Traverse the first linked list and store references to each node in the hash set
    let curr = headA;
    while (curr !== null) {
        nodeSet.add(curr);
        curr = curr.next;
    }

    // Traverse the second linked list and check if any node is already in the hash set
    let intersectionNode = null;
    curr = headB;
    while (curr !== null) {
        if (nodeSet.has(curr)) {
            intersectionNode = curr;
            break;
        }
        curr = curr.next;
    }

    return intersectionNode;
}
// Creating linked list A: 1 -> 2 -> 3 -> 4 -> 5
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let headA = node1;

// Creating linked list B: 7 -> 4 -> 5
let node7 = new Node(7);
node7.next = node4;
let headB = node7;

// Find the intersection node
let intersectionNode = getIntersectionNode(headA, headB);
if (intersectionNode !== null) {
    console.log("Intersection node value: " + intersectionNode.value);
} else {
    console.log("No intersection found.");
}
