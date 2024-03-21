class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddleElement(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
}

// Example usage
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(findMiddleElement(node1)); // Output: 3
