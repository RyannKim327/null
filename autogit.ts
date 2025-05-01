class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true;
    }

    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next; // Move slow by one and fast by two
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow; // Start from the middle

    while (curr) {
        const nextTemp = curr.next; // Store the next node
        curr.next = prev; // Reverse the link
        prev = curr; // Move prev pointer forward
        curr = nextTemp; // Move to next node
    }

    // Step 3: Compare the two halves
    let firstHalf: ListNode | null = head;
    let secondHalf: ListNode | null = prev; // This is the head of the reversed second half

    while (secondHalf) { // Check only till the end of the reversed half
        if (firstHalf!.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf!.next; // Move forward in the first half
        secondHalf = secondHalf.next; // Move forward in the reversed second half
    }

    return true; // If we got through the loop, it's a palindrome.
}

// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(list)); // Output: true

const list2 = new ListNode(1, new ListNode(2));
console.log(isPalindrome(list2)); // Output: false
