class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) {
            return true;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}

// Usage
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;
node3.next = node1;

console.log(hasCycle(node1)); // Output: true
