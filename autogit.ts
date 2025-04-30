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
        return true; // An empty list or a single node list is a palindrome
    }

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
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Step 3: Compare the two halves
    let firstHalfNode: ListNode | null = head;
    let secondHalfNode: ListNode | null = prev;

    while (secondHalfNode) {
        if (firstHalfNode!.value !== secondHalfNode.value) {
            return false; // Not a palindrome
        }
        firstHalfNode = firstHalfNode!.next;
        secondHalfNode = secondHalfNode.next;
    }

    // Optionally: Restore the original linked list can be done if needed

    return true; // It's a palindrome
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
