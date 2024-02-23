class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(list1, list2) {
    let set = new Set();

    // Iterate through the first linked list and store nodes in a set
    let current = list1;
    while (current !== null) {
        set.add(current);
        current = current.next;
    }

    // Iterate through the second linked list and check if the node exists in the set
    current = list2;
    while (current !== null) {
        if (set.has(current)) {
            return current; // Intersection found
        }
        current = current.next;
    }

    return null; // No intersection found
}

// Example
let commonNode = new Node(8);
let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = commonNode;

let list2 = new Node(4);
list2.next = new Node(5);
list2.next.next = commonNode;

let result = findIntersection(list1, list2);
if (result) {
    console.log("Intersection Node Value: " + result.value);
} else {
    console.log("No intersection found.");
}
