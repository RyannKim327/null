class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end of the list
    append(value: number) {
        const newNode = new Node(value);
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
    reverse() {
        let previous: Node | null = null;
        let current: Node | null = this.head;

        while (current !== null) {
            const nextNode = current.next;  // Save next node
            current.next = previous;         // Reverse the link
            previous = current;              // Move previous to current
            current = nextNode;              // Move to next node
        }
        this.head = previous;                // Update head to the new first element
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.value.toString() + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Original Linked List:");
list.print();

list.reverse();

console.log("Reversed Linked List:");
list.print();
