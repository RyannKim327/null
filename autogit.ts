class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true; // An empty list is a palindrome

    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let current: ListNode | null = slow;
    
    while (current) {
        const nextTemp = current.next; // Store next node
        current.next = prev;            // Reverse link
        prev = current;                 // Move prev and current one step forward
        current = nextTemp;
    }

    // Step 3: Compare the two halves
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // 'prev' now points to the head of the reversed second half

    while (right) { // Compare until the end of the reversed half
        if (left.value !== right.value) {
            return false; // Not a palindrome
        }
        left = left.next; // Move left pointer
        right = right.next; // Move right pointer
    }

    return true; // If no mismatches found, it's a palindrome
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
