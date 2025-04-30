class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return true; // Empty list or single element is a palindrome.
    }

    // Step 1: Find the middle of the linked list.
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    // Step 2: Reverse the second half of the linked list.
    let prev: ListNode | null = null;
    let current = slow;

    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Step 3: Compare the first half and the reversed second half.
    let left = head;
    let right = prev; // 'prev' is now the head of the reversed second half.

    while (right) {
        if (left.value !== right.value) {
            return false; // Not a palindrome.
        }
        left = left.next!;
        right = right.next!;
    }

    return true; // It's a palindrome.
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
