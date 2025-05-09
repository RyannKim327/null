class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;

    const stack: number[] = [];
    let current: ListNode | null = head;

    // Push all values to the stack
    while (current) {
        stack.push(current.value);
        current = current.next;
    }

    // Compare values from the stack with the linked list
    current = head;
    while (current) {
        if (current.value !== stack.pop()) {
            return false;
        }
        current = current.next;
    }

    return true;
}
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
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev: ListNode | null = null;
    while (slow) {
        const nextTemp: ListNode | null = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    // Compare the first half and the reversed second half
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // Reversed second half

    while (right) {
        if (left.value !== right.value) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
}
