// Node class to create nodes of linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to check if a linked list is palindrome
function isPalindromeLinkedList(head) {
    let currentNode = head;
    let values = [];

    // Traverse the linked list and store the values in an array
    while (currentNode !== null) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }

    // Create a reverse copy of the array
    let reverseValues = values.slice().reverse();

    // Compare original array with reverse copy
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== reverseValues[i]) {
            return false;
        }
    }

    return true;
}

// Example linked list
const node1 = new Node('r');
const node2 = new Node('a');
const node3 = new Node('c');
const node4 = new Node('e');
const node5 = new Node('c');
const node6 = new Node('a');
const node7 = new Node('r');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// Check if the linked list is a palindrome
console.log(isPalindromeLinkedList(node1)); // Output: true
