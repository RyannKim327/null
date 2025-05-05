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
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev: ListNode | null = null;
    let current: ListNode | null = slow;

    while (current) {
        const nextTemp: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    // Step 3: Compare the first half and the reversed second half
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // Start of reversed half

    while (right) { // All remaining nodes in the right will be compared
        if (left.value !== right.value) {
            return false; // Not a palindrome
        }
        left = left.next;
        right = right.next;
    }

    return true;
}
// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    let dummy: ListNode = new ListNode(0);
    let current: ListNode = dummy;

    for (const value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

// Test the function
const linkedList = createLinkedList([1, 2, 3, 2, 1]);
console.log(isPalindrome(linkedList)); // Output: true

const linkedList2 = createLinkedList([1, 2, 3, 4, 5]);
console.log(isPalindrome(linkedList2)); // Output: false
