class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(list1, list2) {
    let set = new Set();

    // Traverse list 1 and store nodes in the set
    let current = list1;
    while (current != null) {
        set.add(current);
        current = current.next;
    }

    // Traverse list 2 and check for intersection
    current = list2;
    while (current != null) {
        if (set.has(current)) {
            return current;
        }
        current = current.next;
    }

    return null; // No intersection found
}

// Sample linked lists
let intersectionNode = new Node(8);
let list1 = new Node(4);
list1.next = new Node(1);
list1.next.next = intersectionNode;

let list2 = new Node(5);
list2.next = new Node(6);
list2.next.next = new Node(1);
list2.next.next.next = intersectionNode;

let result = findIntersection(list1, list2);
console.log(result); // Output should be the node with value 8
