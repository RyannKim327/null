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

    // Function to add a new node at the end of the list
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

    // Function to print the linked list
    print() {
        let current = this.head;
        const values: number[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }

    // Function to reverse the linked list
    reverse() {
        let previous: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null = null;

        while (current) {
            next = current.next;  // Store next node
            current.next = previous;  // Reverse the current node's pointer
            previous = current;  // Move pointers one position forward
            current = next;
        }

        this.head = previous;  // Update head to the new front of the list
    }
}
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
