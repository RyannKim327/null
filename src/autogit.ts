// Define the structure of a Node in the linked list
class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

// Function to calculate the length of the linked list
function getLength(head: ListNode | null): number {
    let length = 0; // Initialize the counter
    let currentNode = head; // Start from the head of the list

    // Traverse the list until the end
    while (currentNode !== null) {
        length++; // Increment the counter for each node
        currentNode = currentNode.next; // Move to the next node
    }

    return length; // Return the total count
}

// Example usage:
const head = new ListNode(1); // Create the head node
head.next = new ListNode(2);  // Add a second node
head.next.next = new ListNode(3); // Add a third node

console.log("Length of the linked list:", getLength(head)); // Output: 3
console.log("Length of an empty list:", getLength(null)); // Output: 0
console.log("Length of a single-node list:", getLength(new ListNode(10))); // Output: 1
