class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head) {
    let values = [];
    
    // Traverse the linked list and store values in an array
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    
    // Compare values to check for palindrome
    let start = 0;
    let end = values.length - 1;
    
    while (start < end) {
        if (values[start] !== values[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}

// Example usage
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node2b = new Node(2);
let node1b = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node2b;
node2b.next = node1b;

console.log(isPalindrome(node1)); // Output: true
