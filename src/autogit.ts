class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null; // Initially, the next node is null
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null; // Initially, the linked list is empty
    }

    // Method to add a new node at the end of the list
    append(value: number): void {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to reverse the linked list
    reverse(): void {
        let previous: ListNode | null = null;
        let current: ListNode | null = this.head;
        let next: ListNode | null = null;

        while (current !== null) {
            next = current.next; // Store the next node
            current.next = previous; // Reverse the current node's pointer
            previous = current; // Move previous to this node
            current = next; // Move to the next node
        }
        this.head = previous; // Update the head to the new first element
    }

    // Method to print the linked list
    print(): void {
        let current = this.head;
        const values: number[] = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original Linked List:");
list.print(); // Output: 1 -> 2 -> 3 -> 4 -> 5

list.reverse();

console.log("Reversed Linked List:");
list.print(); // Output: 5 -> 4 -> 3 -> 2 -> 1
