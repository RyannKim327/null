class ListNode {
    value: number;
    next: ListNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// A function to check if the linked list is a palindrome
function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;

    // Use the fast and slow pointer technique
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let current = slow;

    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    // Step 3: Compare the first half and the reversed second half
    let left = head;
    let right = prev; // This is the head of the reversed second half

    while (right) {
        if (left.value !== right.value) {
            return false; // Not a palindrome
        }
        left = left.next!;
        right = right.next;
    }

    // Step 4: (Optional) Restore the original linked list
    // We reverse the second half again to restore the original list
    current = prev;
    prev = null;

    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return true; // It is a palindrome
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Should output true
