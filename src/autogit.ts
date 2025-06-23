// Definition of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true; // Empty or single-node list is a palindrome

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;

    // Step 1: Find the middle of the linked list using slow and fast pointers
    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    // If the list has an odd number of nodes, move slow one step forward
    if (fast) {
        slow = slow!.next;
    }

    // Step 2: Reverse the second half of the linked list
    let secondHalfStart: ListNode | null = reverseList(slow);

    // Step 3: Compare the first half with the reversed second half
    let firstHalfStart: ListNode | null = head;
    let isPalindrome: boolean = true;
    while (secondHalfStart) {
        if (firstHalfStart!.value !== secondHalfStart.value) {
            isPalindrome = false;
            break;
        }
        firstHalfStart = firstHalfStart!.next;
        secondHalfStart = secondHalfStart.next;
    }

    // Step 4: Optionally, restore the second half of the linked list
    if (prev) {
        prev.next = reverseList(secondHalfStart);
    }

    return isPalindrome;
}

// Helper function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current) {
        const nextNode: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}
// Create a linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
