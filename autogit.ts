class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    // Find the middle of the linked list
    while (fast && fast.next) {
        slow = slow?.next || null;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;

    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Compare the first half and the reversed second half
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // Where prev is the head of reversed second half
    
    while (right) {
        if (left?.value !== right.value) {
            return false; // Not a palindrome
        }
        left = left.next;
        right = right.next;
    }

    return true; // Is a palindrome
}

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(1)));
console.log(isPalindrome(head)); // Output: true
