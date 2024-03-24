class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const findIntersection = (list1, list2) => {
    let set = new Set();

    // Traverse the first list and store all nodes in the set
    let current = list1;
    while (current) {
        set.add(current);
        current = current.next;
    }

    // Traverse the second list and check if the node exists in the set
    current = list2;
    while (current) {
        if (set.has(current)) {
            return current;
        }
        current = current.next;
    }

    return null; // No intersection found
};

// Example usage
// Construct two linked lists
let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

let list2 = new Node(5);
list2.next = new Node(6);
list2.next.next = list1.next; // Intersection point

let intersectionNode = findIntersection(list1, list2);
if (intersectionNode) {
    console.log("Intersection Node Value: ", intersectionNode.value);
} else {
    console.log("No intersection found.");
}
