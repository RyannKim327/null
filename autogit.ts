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

    // Method to append a new node to the linked list
    append(value: number): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current: Node | null = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to find the middle element of the linked list
    findMiddle(): Node | null {
        if (!this.head) {
            return null; // Return null if the list is empty
        }

        let slow: Node | null = this.head; // Moves one step at a time
        let fast: Node | null = this.head; // Moves two steps at a time

        while (fast && fast.next) {
            slow = slow.next;         // Move slow pointer one step
            fast = fast.next.next;   // Move fast pointer two steps
        }

        return slow; // The slow pointer will point to the middle node
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const middleNode = list.findMiddle();
if (middleNode) {
    console.log('Middle element:', middleNode.value); // Output: Middle element: 3
}
