// Linked List Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
    let values = [];
    let currentNode = head;

    // Traverse the linked list and store node values in an array
    while (currentNode) {
        values.push(currentNode.data);
        currentNode = currentNode.next;
    }

    // Use two-pointer technique to check if the array is a palindrome
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Example linked list
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1)); // Output: true
