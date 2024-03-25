// Definition for a singly-linked list node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
    // Convert the linked list into an array
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }

    // Use two pointers technique to check palindrome
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example linked list
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output should be true
