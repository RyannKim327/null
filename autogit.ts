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

    // Method to append a new node to the list
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

    // Method to reverse the linked list
    reverse() {
        let prev: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null = null;

        while (current) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the current node's pointer
            prev = current;      // Move pointers one position forward
            current = next;
        }
        this.head = prev; // Update head to be the new front of the list
    }

    // Method to print the linked list values
    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.value + " -> ");
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
list.append(5);

console.log("Original Linked List:");
list.print();

list.reverse();

console.log("Reversed Linked List:");
list.print();
