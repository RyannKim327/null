class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
    let values = [];
    let slow = head;
    let fast = head;

    // Extract values of the linked list into an array
    while (fast && fast.next) {
        values.push(slow.value);
        slow = slow.next;
        fast = fast.next.next;
    }

    // Handle odd number of nodes
    if (fast) {
        slow = slow.next;
    }

    // Reverse the second half of the linked list
    let secondHalf = null;
    while (slow) {
        let temp = slow.next;
        slow.next = secondHalf;
        secondHalf = slow;
        slow = temp;
    }

    // Compare the first half and the reversed second half
    while (secondHalf) {
        if (values.pop() !== secondHalf.value) {
            return false;
        }
        secondHalf = secondHalf.next;
    }

    return true;
}

// Example usage
let a = new Node('r');
let b = new Node('a');
let c = new Node('d');
let d = new Node('a');
let e = new Node('r');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(isPalindrome(a)); // Output: true
