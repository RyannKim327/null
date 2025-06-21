// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number = 0, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * Function to find the nth node from the end of a linked list
 * @param head - The head of the linked list
 * @param n - The position from the end
 * @returns The nth node from the end or null if it doesn't exist
 */
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        return null; // Empty list case
    }

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // Move the fast pointer n steps forward
    for (let i = 0; i < n; i++) {
        if (!fast) {
            return null; // n is larger than the length of the list
        }
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast) {
        fast = fast.next;
        slow = slow!.next; // Non-null assertion since we've already checked
    }

    return slow;
}

// Example usage:
function main() {
    // Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const n = 2; // Find the 2nd node from the end

    const result = findNthFromEnd(head, n);
    if (result) {
        console.log(`The ${n}nd node from the end is: ${result.value}`);
    } else {
        console.log("Node not found.");
    }
}

main();
The 2nd node from the end is: 4
function findNthFromEndWithCounter(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let length = 0;
    let current = head;

    // First pass to get the length of the list
    while (current) {
        length++;
        current = current.next;
    }

    // Check if n is within the bounds of the list length
    if (n > length || n <= 0) {
        return null;
    }

    // Second pass to find the (length - n)th node from the start
    current = head;
    for (let i = 0; i < length - n; i++) {
        current = current!.next;
    }

    return current;
}
// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number = 0, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * Function to find the nth node from the end of a linked list
 * @param head - The head of the linked list
 * @param n - The position from the end
 * @returns The nth node from the end or null if it doesn't exist
 */
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        return null; // Empty list case
    }

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // Move the fast pointer n steps forward
    for (let i = 0; i < n; i++) {
        if (!fast) {
            return null; // n is larger than the length of the list
        }
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast) {
        fast = fast.next;
        slow = slow!.next; // Non-null assertion since we've already checked
    }

    return slow;
}

// Example usage:
function main() {
    // Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const n = 2; // Find the 2nd node from the end

    const result = findNthFromEnd(head, n);
    if (result) {
        console.log(`The ${n}nd node from the end is: ${result.value}`);
    } else {
        console.log("Node not found.");
    }
}

main();
