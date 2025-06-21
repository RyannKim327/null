class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true; // An empty or single-node list is a palindrome

    // Step 1: Find the middle of the list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let secondHalfHead: ListNode | null = reverseList(slow);

    // Step 3: Compare the first half and the reversed second half
    let firstHalfHead: ListNode | null = head;
    let isPalindrome: boolean = true;

    while (secondHalfHead) {
        if (firstHalfHead!.val !== secondHalfHead.val) {
            isPalindrome = false;
            break;
        }
        firstHalfHead = firstHalfHead!.next;
        secondHalfHead = secondHalfHead.next;
    }

    // Step 4: Restore the second half (optional)
    reverseList(secondHalfHead);

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
// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Test cases
const list1 = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(list1)); // Output: true

const list2 = createLinkedList([1, 2]);
console.log(isPalindrome(list2)); // Output: false

const list3 = createLinkedList([1, 2, 3, 2, 1]);
console.log(isPalindrome(list3)); // Output: true
