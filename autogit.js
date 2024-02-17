class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    let currA = headA;
    let currB = headB;

    // Move the pointers to the same start position
    while (lenA > lenB) {
        currA = currA.next;
        lenA--;
    }

    while (lenB > lenA) {
        currB = currB.next;
        lenB--;
    }

    // Traverse both lists until a common node is found
    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }

    return currA;
}

function getLength(node) {
    let length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    return length;
}

// Example Usage
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let commonNode = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = commonNode;
node4.next = commonNode;

let intersectionNode = getIntersectionNode(node1, node4);
console.log(intersectionNode.value); // Output: 3
