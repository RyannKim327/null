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

    // Helper method to append data to the linked list
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

    // Method to reverse the linked list
    reverse() {
        let prev: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null = null;

        while (current) {
            next = current.next; // Store next node
            current.next = prev; // Reverse the link
            prev = current;      // Move prev and current one step forward
            current = next;
        }
        this.head = prev; // Reset head to the new front of the list
    }

    // Helper method to print the linked list
    printList() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original Linked List:");
list.printList(); // Output: 1 -> 2 -> 3 -> 4 -> 5

list.reverse();

console.log("Reversed Linked List:");
list.printList(); // Output: 5 -> 4 -> 3 -> 2 -> 1
