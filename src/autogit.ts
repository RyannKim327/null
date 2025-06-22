class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true; // Empty or single-node list is a palindrome

    // Step 1: Find the middle of the linked list using slow and fast pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let secondHalfStart: ListNode | null = reverseList(slow);

    // Step 3: Compare the first half with the reversed second half
    let firstHalfStart: ListNode | null = head;
    let secondHalfCopy: ListNode | null = secondHalfStart;

    let isPalindrome: boolean = true;
    while (secondHalfCopy) {
        if (firstHalfStart!.val !== secondHalfCopy.val) {
            isPalindrome = false;
            break;
        }
        firstHalfStart = firstHalfStart!.next;
        secondHalfCopy = secondHalfCopy.next;
    }

    // Step 4: Restore the original linked list (optional)
    reverseList(secondHalfStart);

    return isPalindrome;
}

// Helper function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
        const nextTemp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
}
// Create a linked list: 1 -> 2 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true

// Create a linked list: 1 -> 2
const head2 = new ListNode(1);
head2.next = new ListNode(2);

console.log(isPalindrome(head2)); // Output: false
