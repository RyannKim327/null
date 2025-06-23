class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number = 0, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}
function findNthFromEndTwoPass(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let length = 0;
    let current: ListNode | null = head;

    // First pass: calculate the length of the list
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Check if n is within the bounds
    if (n > length || n <= 0) {
        throw new Error("Invalid value of n");
    }

    // Second pass: find the (length - n)th node
    let targetIndex = length - n;
    current = head;

    for (let i = 0; i < targetIndex; i++) {
        if (current === null) {
            throw new Error("Unexpected error: list shorter than expected");
        }
        current = current.next;
    }

    return current;
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

// Helper function to print the linked list
function printList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

// Example usage:
const list = createLinkedList([1, 2, 3, 4, 5]);
printList(list); // 1 -> 2 -> 3 -> 4 -> 5

const nthNode = findNthFromEndTwoPass(list, 2);
if (nthNode) {
    console.log(`The 2nd node from the end has value: ${nthNode.value}`); // Output: 4
} else {
    console.log("Node not found.");
}
function findNthFromEndOnePass(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Advance the first pointer by n steps
    for (let i = 0; i < n; i++) {
        if (first === null) {
            throw new Error("n is larger than the length of the list");
        }
        first = first.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second!.next; // Non-null assertion since we've checked boundaries
    }

    return second;
}
// Using the same helper functions as above

const nthNodeOnePass = findNthFromEndOnePass(list, 2);
if (nthNodeOnePass) {
    console.log(`The 2nd node from the end has value: ${nthNodeOnePass.value}`); // Output: 4
} else {
    console.log("Node not found.");
}
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number = 0, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

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

function printList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

function findNthFromEndOnePass(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    for (let i = 0; i < n; i++) {
        if (first === null) {
            throw new Error("n is larger than the length of the list");
        }
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    return second;
}

// Example Usage
try {
    const list = createLinkedList([10, 20, 30, 40, 50]);
    printList(list); // 10 -> 20 -> 30 -> 40 -> 50

    const nth = 2;
    const nthNode = findNthFromEndOnePass(list, nth);
    if (nthNode) {
        console.log(`The ${nth}nd node from the end has value: ${nthNode.value}`); // Output: 40
    } else {
        console.log("Node not found.");
    }
} catch (error) {
    console.error(error.message);
}
