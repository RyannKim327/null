class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(list1, list2) {
    let set = new Set();
    
    // Store nodes of list1 in a set
    let current = list1;
    while (current) {
        set.add(current);
        current = current.next;
    }
    
    // Traverse list2 and check if any node is in set
    current = list2;
    while (current) {
        if (set.has(current)) {
            return current;
        }
        current = current.next;
    }
    
    return null; // No intersection found
}

// Example linked lists
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let nodeA = new ListNode('A');
let nodeB = new ListNode('B');

nodeA.next = nodeB;
nodeB.next = node3;

let intersectionNode = findIntersection(node1, nodeA);
console.log('Intersection node value:', intersectionNode.value);
