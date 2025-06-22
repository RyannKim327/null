// Definition of a linked list node
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        const nextTemp = curr.next; // Store the next node
        curr.next = prev; // Reverse the current node's pointer
        prev = curr; // Move prev to the current node
        curr = nextTemp; // Move to the next node
    }

    return prev; // The new head of the reversed list
}

// Function to check if a linked list is a palindrome
function isPalindrome(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        // An empty list or single-node list is a palindrome
        return true;
    }

    // Step 1: Find the middle of the linked list using slow and fast pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // Move slow pointer by one step
        fast = fast.next.next; // Move fast pointer by two steps
    }

    // At this point, slow points to the middle of the list

    // Step 2: Reverse the second half of the linked list
    let secondHalfHead: ListNode | null = reverseList(slow);

    // Step 3: Compare the first half and the reversed second half
    let firstHalfHead: ListNode | null = head;
    let secondHalfPtr: ListNode | null = secondHalfHead;

    let isPalindrome = true;

    while (secondHalfPtr !== null) {
        if (firstHalfHead!.val !== secondHalfPtr.val) {
            isPalindrome = false;
            break;
        }
        firstHalfHead = firstHalfHead!.next;
        secondHalfPtr = secondHalfPtr.next;
    }

    // Step 4 (Optional): Restore the second half of the linked list
    reverseList(secondHalfHead);

    return isPalindrome;
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

// Helper function to print a linked list
function printLinkedList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

// Test case
const list = createLinkedList([1, 2, 3, 2, 1]);
console.log("Linked List:");
printLinkedList(list);

console.log("Is Palindrome:", isPalindrome(list)); // Output: true
