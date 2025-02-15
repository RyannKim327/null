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
    getLength(): number {
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log("Length of linked list:", list.getLength()); // Outputs: Length of linked list: 3
