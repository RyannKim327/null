// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextNode; // Move to the next node
    }

    return prev; // New head of the reversed list
}

// Function to check if a linked list is a palindrome
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true; // Empty or single-node list is a palindrome

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Step 1: Find the middle of the linked list using slow and fast pointers
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let secondHalfHead: ListNode | null = reverseList(slow);

    // Step 3: Compare the first half and the reversed second half
    let firstHalfHead: ListNode | null = head;
    let secondHalfPointer: ListNode | null = secondHalfHead;

    let isPalindrome = true;
    while (secondHalfPointer !== null) {
        if (firstHalfHead!.value !== secondHalfPointer.value) {
            isPalindrome = false;
            break;
        }
        firstHalfHead = firstHalfHead!.next;
        secondHalfPointer = secondHalfPointer.next;
    }

    // Step 4: Restore the second half of the linked list (optional)
    reverseList(secondHalfHead);

    return isPalindrome;
}
// Helper function to create a linked list from an array
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;

    const head = new ListNode(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    return head;
}

// Example 1: Palindrome
const list1 = createLinkedList([1, 2, 3, 2, 1]);
console.log(isPalindrome(list1)); // Output: true

// Example 2: Not a Palindrome
const list2 = createLinkedList([1, 2, 3, 4, 5]);
console.log(isPalindrome(list2)); // Output: false
