class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function findNthFromEndTwoPass(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    // Step 1: Calculate the length of the linked list
    let length = 0;
    let current: ListNode | null = head;
    while (current) {
        length++;
        current = current.next;
    }

    // Step 2: Check if n is valid
    if (n > length || n <= 0) {
        throw new Error("Invalid value of n");
    }

    // Step 3: Traverse to the (length - n)th node
    let targetIndex = length - n;
    current = head;
    for (let i = 0; i < targetIndex; i++) {
        current = current!.next;
    }

    return current;
}
function findNthFromEndTwoPointer(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Step 1: Move the first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) {
            throw new Error("Invalid value of n");
        }
        first = first.next;
    }

    // Step 2: Move both pointers until the first pointer reaches the end
    while (first) {
        first = first.next;
        second = second!.next;
    }

    return second;
}
// Helper function to create a linked list from an array
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

// Example usage
const list = createLinkedList([1, 2, 3, 4, 5]);

console.log(findNthFromEndTwoPass(list, 2)?.value); // Output: 4
console.log(findNthFromEndTwoPointer(list, 2)?.value); // Output: 4
