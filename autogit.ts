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
        return true; // A list with 0 or 1 element is a palindrome
    }

    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Step 3: Compare the first half and the reversed second half
    let firstHalf: ListNode | null = head;
    let secondHalf: ListNode | null = prev; // This is now the head of the reversed second half
    while (secondHalf) {
        if (firstHalf!.value !== secondHalf.value) {
            return false; // Not a palindrome
        }
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }

    return true; // It is a palindrome
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
