// Definition for a singly-linked list node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
    let arr = [];
    let currentNode = head;

    // Traverse the linked list and store node values in an array
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }

    // Use two pointers to check if the array is a palindrome
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

// Example linked list
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1)); // Output: true
