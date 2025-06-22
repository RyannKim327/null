// Define the structure of a Node
class ListNode {
    data: number;  // You can change this type to suit your needs (e.g., string)
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

// Function to calculate the length of the linked list
function getLength(head: ListNode | null): number {
    let length = 0;
    let currentNode = head;

    // Traverse the linked list
    while (currentNode !== null) {
        length++;
        currentNode = currentNode.next;  // Move to the next node
    }

    return length;
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

console.log("Length of the linked list:", getLength(node1));  // Output: 3
