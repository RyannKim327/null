class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let currA = headA;
    let currB = headB;
    
    while (currA !== currB) {
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }
    
    return currA;
}

// Example usage
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let nodeA1 = new ListNode(10);
let nodeA2 = new ListNode(11);

nodeA1.next = nodeA2;
nodeA2.next = node3; // Intersection point

let intersectionNode = getIntersectionNode(node1, nodeA1);
console.log(intersectionNode); // This will output the common node (node3 in this case)
