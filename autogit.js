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
// Define the Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create a linked list
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// Uncomment the line below to create a cycle
// node4.next = node2;

// Check if the linked list contains a cycle
console.log(hasCycle(node1)); // Output: false
