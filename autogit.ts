class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    // Find the middle of the linked list
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let current: ListNode | null = slow;
    
    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Compare the first half and the reversed second half
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // The head of the reversed second half

    while (right) {
        if (left!.value !== right.value) {
            return false;
        }
        left = left!.next;
        right = right.next;
    }

    return true;
}

// Example Usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
