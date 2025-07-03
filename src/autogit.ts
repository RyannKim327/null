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

    // Method to find the middle element
    findMiddle(): Node | null {
        let slow: Node | null = this.head;
        let fast: Node | null = this.head;

        while (fast && fast.next) {
            slow = slow?.next || null; // Move slow by one
            fast = fast.next.next; // Move fast by two
        }

        return slow; // slow is now at the middle
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
    console.log(`The middle element is: ${middleNode.value}`);
} else {
    console.log("The list is empty.");
}
