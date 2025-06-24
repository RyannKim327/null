class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let length = 0;
    let current = head;

    // First pass: calculate the length of the linked list
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Check if n is valid
    if (n > length || n <= 0) {
        throw new Error("Invalid value of n");
    }

    // Second pass: find the (length - n)th node
    current = head;
    for (let i = 0; i < length - n; i++) {
        current = current!.next;
    }

    return current;
}
// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const result = findNthFromEnd(head, n);
console.log(result?.val); // Output: 4
function findNthFromEndTwoPointers(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) {
            throw new Error("n is larger than the length of the list");
        }
        fast = fast.next;
    }

    // If fast reached the end, the head is the nth from end
    if (fast === null) {
        return head;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow!.next;
    }

    return slow;
}
// Using the same linked list: 1 -> 2 -> 3 -> 4 -> 5
const n = 2;
const result = findNthFromEndTwoPointers(head, n);
console.log(result?.val); // Output: 4
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// Method 1: Two-Pass Approach
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let length = 0;
    let current = head;

    // Calculate length
    while (current !== null) {
        length++;
        current = current.next;
    }

    if (n > length || n <= 0) {
        throw new Error("Invalid value of n");
    }

    current = head;
    for (let i = 0; i < length - n; i++) {
        current = current!.next;
    }

    return current;
}

// Method 2: Two-Pointer Technique
function findNthFromEndTwoPointers(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    for (let i = 0; i < n; i++) {
        if (fast === null) {
            throw new Error("n is larger than the length of the list");
        }
        fast = fast.next;
    }

    if (fast === null) {
        return head;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow!.next;
    }

    return slow;
}

// Usage Example
function main() {
    // Creating linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const n = 2;

    console.log("Using Two-Pass Approach:");
    try {
        const result1 = findNthFromEnd(head, n);
        console.log(`The ${n}nd node from the end is:`, result1?.val);
    } catch (error) {
        console.error(error.message);
    }

    console.log("\nUsing Two-Pointer Technique:");
    try {
        const result2 = findNthFromEndTwoPointers(head, n);
        console.log(`The ${n}nd node from the end is:`, result2?.val);
    } catch (error) {
        console.error(error.message);
    }
}

main();
Using Two-Pass Approach:
The 2nd node from the end is: 4

Using Two-Pointer Technique:
The 2nd node from the end is: 4
