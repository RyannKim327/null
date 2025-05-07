// Define a Node class
class Node {
    value: number;
    next: Node | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

// Define a LinkedList class
class LinkedList {
    head: Node | null = null;

    // Method to append a new node to the linked list
    append(value: number) {
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
            return null;
        }

        let slow: Node | null = this.head;
        let fast: Node | null = this.head;

        while (fast && fast.next) {
            slow = slow.next; // Move slow pointer by 1
            fast = fast.next.next; // Move fast pointer by 2
        }

        return slow; // When fast pointer reaches the end, slow pointer is at the middle
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// Find the middle node
const middleNode = linkedList.findMiddle();
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: 3
} else {
    console.log('The linked list is empty.');
}
