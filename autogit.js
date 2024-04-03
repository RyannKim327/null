// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
    let currentNode = head;
    let values = [];

    // Traverse the linked list and push elements into the array
    while (currentNode !== null) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }

    // Use two pointers technique to compare elements
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

// Example usage
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

console.log(isPalindrome(list)); // Output: true
