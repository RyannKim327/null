function hasCycle(head) {
    if (!head) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
// Define a simple linked list with a cycle
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

head.next = node2;
node2.next = node3;
node3.next = head; // Cycle created

console.log(hasCycle(head)); // Output: true
