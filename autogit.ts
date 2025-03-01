class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Method to append a value to the linked list
    append(value: number): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to print the linked list
    print(): void {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log('null');
    }

    // Method to reverse the linked list
    reverse(): void {
        let previous: ListNode | null = null;
        let current: ListNode | null = this.head;
        let next: ListNode | null = null;

        while (current) {
            next = current.next; // Store the next node
            current.next = previous; // Reverse the link
            previous = current; // Move previous one step forward
            current = next; // Move to the next node
        }

        this.head = previous; // Update the head to the new front of the list
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Original Linked List:");
linkedList.print();

linkedList.reverse(); // Reverse the linked list

console.log("Reversed Linked List:");
linkedList.print();
