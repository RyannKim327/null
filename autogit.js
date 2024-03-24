class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(list1, list2) {
    let set = new Set();
    
    // Traverse list1 and store nodes in a Set
    let current = list1;
    while (current) {
        set.add(current);
        current = current.next;
    }
    
    // Traverse list2 and check for nodes in the Set
    current = list2;
    while (current) {
        if (set.has(current)) {
            return current;
        }
        current = current.next;
    }
    
    return null; // No intersection found
}

// Example
let commonNode = new Node(10);

let list1 = new Node(2);
list1.next = new Node(4);
list1.next.next = new Node(6);
list1.next.next.next = commonNode;

let list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = commonNode;

let intersection = findIntersection(list1, list2);
console.log("Intersection node value:", intersection.value);
