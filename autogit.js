// Definition for singly-linked list.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
    let values = [];
    let currentNode = head;

    // Traverse the linked list and store the values in an array
    while (currentNode !== null) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }

    // Check if the values form a palindrome
    for (let i = 0; i < Math.floor(values.length / 2); i++) {
        if (values[i] !== values[values.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Example usage:
// Creating a linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
