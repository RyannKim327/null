class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number = 0, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        throw new Error("The linked list is empty.");
    }

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move the first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) {
            throw new Error("n is larger than the length of the linked list.");
        }
        first = first.next;
    }

    // Edge case: If n equals the length of the list, the first pointer will be null
    if (!first) {
        return head; // The nth node from the end is the head itself
    }

    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second!.next; // Non-null assertion since first and second maintain the same gap
    }

    return second;
}
// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode {
    const dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next!;
}

// Helper function to print the linked list
function printLinkedList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = createLinkedList([1, 2, 3, 4, 5]);

console.log("Linked List:");
printLinkedList(head);

// Find the 2nd node from the end
const n = 2;
const nthNode = findNthFromEnd(head, n);

if (nthNode) {
    console.log(`The ${n}nd node from the end has value: ${nthNode.value}`);
} else {
    console.log(`The ${n}nd node from the end does not exist.`);
}
Linked List:
1 -> 2 -> 3 -> 4 -> 5
The 2nd node from the end has value: 4
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number = 0, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        throw new Error("The linked list is empty.");
    }

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move the first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) {
            throw new Error("n is larger than the length of the linked list.");
        }
        first = first.next;
    }

    // Edge case: If n equals the length of the list, the first pointer will be null
    if (!first) {
        return head; // The nth node from the end is the head itself
    }

    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second!.next; // Non-null assertion since first and second maintain the same gap
    }

    return second;
}

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode {
    const dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next!;
}

// Helper function to print the linked list
function printLinkedList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

// Example Usage
function main() {
    // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = createLinkedList([1, 2, 3, 4, 5]);

    console.log("Linked List:");
    printLinkedList(head);

    // Find the 2nd node from the end
    const n = 2;
    try {
        const nthNode = findNthFromEnd(head, n);
        if (nthNode) {
            console.log(`The ${n}nd node from the end has value: ${nthNode.value}`);
        } else {
            console.log(`The ${n}nd node from the end does not exist.`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

main();
