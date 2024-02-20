// Node class to create nodes of a linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the intersection of two linked lists
function findIntersection(head1, head2) {
    let list1Nodes = [];
    let list2Nodes = [];

    // Store nodes of first linked list in an array
    while (head1) {
        list1Nodes.push(head1);
        head1 = head1.next;
    }

    // Store nodes of second linked list in an array
    while (head2) {
        list2Nodes.push(head2);
        head2 = head2.next;
    }

    let intersectionNode = null;

    // Compare the arrays to find the intersection
    for (let node1 of list1Nodes) {
        for (let node2 of list2Nodes) {
            if (node1 === node2) {
                intersectionNode = node1;
                break;
            }
        }
        if (intersectionNode) {
            break;
        }
    }

    return intersectionNode;
}

// Create linked list nodes
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

// Construct the first linked list: 1 -> 2 -> 3 -> 4
node1.next = node2;
node2.next = node3;
node3.next = node4;

let node5 = new Node(5);
let node6 = new Node(6);

// Construct the second linked list: 5 -> 6 -> 3 -> 4
node5.next = node6;
node6.next = node3;

// Find the intersection of the two linked lists
let intersection = findIntersection(node1, node5);

// Print the value of the intersection node
if (intersection) {
    console.log("Intersection Node Value: " + intersection.value);
} else {
    console.log("No intersection found.");
}
