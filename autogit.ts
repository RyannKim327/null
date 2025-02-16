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

    // Method to add a new node to the list
    add(value: number) {
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

    // Method to find the length of the linked list
    length(): number {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.length()); // Output: 3
