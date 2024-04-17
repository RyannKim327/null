class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head) {
    let curr = head;
    let values = [];

    // Push values of linked list into an array
    while (curr !== null) {
        values.push(curr.value);
        curr = curr.next;
    }

    // Create a copy of the array and reverse it
    let reversedValues = values.slice().reverse();

    // Check if the original and reversed arrays are the same
    return JSON.stringify(values) === JSON.stringify(reversedValues);
}

// Example LinkedList
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

console.log(isPalindrome(node1)); // Output: true
