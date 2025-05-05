class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true; // An empty list is a palindrome

    let slow = head;
    let fast = head;
    const stack: number[] = [];

    // Push the first half of the elements onto the stack
    while (fast && fast.next) {
        stack.push(slow.value);
        slow = slow.next;
        fast = fast.next.next;
    }

    // If the list has an odd number of elements, skip the middle element
    if (fast) {
        slow = slow.next;
    }

    // Compare the second half of the list with the stack
    while (slow) {
        const top = stack.pop();
        if (top !== slow.value) {
            return false; // Not a palindrome if there is a mismatch
        }
        slow = slow.next;
    }

    return true; // The linked list is a palindrome
}

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head)); // Output: true
