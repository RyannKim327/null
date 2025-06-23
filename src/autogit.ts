class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function findMiddle(head: ListNode | null): number | null {
    if (head === null) return null; // Handle empty list

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;         // Move slow pointer by one step
        fast = fast.next.next;     // Move fast pointer by two steps
    }

    // When fast reaches the end, slow is at the middle
    return slow!.value;
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
function printLinkedList(head: ListNode | null): void {
    const elements: number[] = [];
    let current = head;

    while (current !== null) {
        elements.push(current.value);
        current = current.next;
    }

    console.log(elements.join(" -> "));
}

// Example usage:
const values = [10, 20, 30, 40, 50];
const head = createLinkedList(values);

console.log("Linked List:");
printLinkedList(head); // Output: 10 -> 20 -> 30 -> 40 -> 50

const middle = findMiddle(head);
console.log(`Middle Element: ${middle}`); // Output: Middle Element: 30
const evenValues = [10, 20, 30, 40];
const evenHead = createLinkedList(evenValues);

console.log("\nLinked List with Even Number of Elements:");
printLinkedList(evenHead); // Output: 10 -> 20 -> 30 -> 40

const evenMiddle = findMiddle(evenHead);
console.log(`Middle Element: ${evenMiddle}`); // Output: Middle Element: 30
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): number | null {
    if (head === null) return null; // Handle empty list

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;         // Move slow pointer by one step
        fast = fast.next.next;     // Move fast pointer by two steps
    }

    // When fast reaches the end, slow is at the middle
    return slow!.value;
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
function printLinkedList(head: ListNode | null): void {
    const elements: number[] = [];
    let current = head;

    while (current !== null) {
        elements.push(current.value);
        current = current.next;
    }

    console.log(elements.join(" -> "));
}

// Example usage:
const values = [10, 20, 30, 40, 50];
const head = createLinkedList(values);

console.log("Linked List:");
printLinkedList(head); // Output: 10 -> 20 -> 30 -> 40 -> 50

const middle = findMiddle(head);
console.log(`Middle Element: ${middle}`); // Output: Middle Element: 30

// Example with Even Number of Elements
const evenValues = [10, 20, 30, 40];
const evenHead = createLinkedList(evenValues);

console.log("\nLinked List with Even Number of Elements:");
printLinkedList(evenHead); // Output: 10 -> 20 -> 30 -> 40

const evenMiddle = findMiddle(evenHead);
console.log(`Middle Element: ${evenMiddle}`); // Output: Middle Element: 30
