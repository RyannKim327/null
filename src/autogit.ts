// Define the structure of a linked list node
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
        // An empty list or a single-node list is always a palindrome
        return true;
    }

    // Step 1: Find the middle of the linked list using slow and fast pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let secondHalfHead: ListNode | null = reverseList(slow);

    // Step 3: Compare the first half and the reversed second half
    let firstHalfHead: ListNode | null = head;
    let tempSecondHalfHead: ListNode | null = secondHalfHead;
    let isPalindrome = true;

    while (tempSecondHalfHead) {
        if (firstHalfHead!.value !== tempSecondHalfHead.value) {
            isPalindrome = false;
            break;
        }
        firstHalfHead = firstHalfHead!.next;
        tempSecondHalfHead = tempSecondHalfHead.next;
    }

    // Step 4: Restore the second half of the linked list (optional)
    reverseList(secondHalfHead);

    return isPalindrome;
}

// Helper function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current) {
        const nextNode = current.next;
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

// Create another linked list: 1 -> 2 -> 3 -> 4 -> 5
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log(isPalindrome(head2)); // Output: false
