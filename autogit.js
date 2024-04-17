class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}

// Usage example
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node1; // Creates a cycle

console.log(hasCycle(node1)); // Output: true
