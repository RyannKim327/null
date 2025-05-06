class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true; // Empty list or single node is a palindrome
    }

    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next; // Move slow by 1
        fast = fast.next.next; // Move fast by 2
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    while (curr) {
        const nextTemp = curr.next; // Store next node
        curr.next = prev; // Reverse the direction
        prev = curr; // Move prev to current node
        curr = nextTemp; // Move to the next node
    }

    // Step 3: Compare the first half and the reversed second half
    let firstHalf: ListNode | null = head;
    let secondHalf: ListNode | null = prev; // Start of the reversed second half
    while (secondHalf) {
        if (firstHalf!.value !== secondHalf.value) {
            return false; // Not a palindrome
        }
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }

    return true; // Is a palindrome
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
