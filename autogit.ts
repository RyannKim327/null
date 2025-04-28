class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null; // Initially, the next node is null
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null; // Initialize the head of the list
    }

    // Method to add a new node at the end
    append(value: number) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to print the list
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log("null");
    }

    // Method to reverse the linked list
    reverse() {
        let previous: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null = null;

        while (current) {
            next = current.next; // Store the next node
            current.next = previous; // Reverse the current node's pointer
            previous = current; // Move pointers one position ahead
            current = next;
        }
        this.head = previous; // Update head to the new first element
    }
}
// Create a new linked list
const list = new LinkedList();

// Add values to the linked list
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Print the original list
console.log("Original Linked List:");
list.printList();

// Reverse the linked list
list.reverse();

// Print the reversed list
console.log("Reversed Linked List:");
list.printList();
Original Linked List:
1 -> 2 -> 3 -> 4 -> 5 -> null
Reversed Linked List:
5 -> 4 -> 3 -> 2 -> 1 -> null
