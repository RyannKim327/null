class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // Step 1: Find the middle of the list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let secondHalfHead = reverseList(slow!.next);
    let firstHalfPointer = head;
    let secondHalfPointer = secondHalfHead;

    // Step 3: Compare the two halves
    while (secondHalfPointer) {
        if (firstHalfPointer!.value !== secondHalfPointer.value) {
            return false;
        }
        firstHalfPointer = firstHalfPointer!.next;
        secondHalfPointer = secondHalfPointer.next;
    }

    // (Optional) Step 4: Restore the list
    slow!.next = reverseList(secondHalfHead);

    return true;
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current = head;

    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}
