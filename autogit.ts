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

    // Method to print the linked list
    print() {
        let current = this.head;
        const values: number[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }

    // Method to reverse the linked list
    reverse() {
        let previous: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null = null;

        while (current) {
            // Store the next node
            next = current.next;  
            // Reverse the current node's pointer
            current.next = previous; 
            // Move pointers one position forward
            previous = current; 
            current = next;  
        }
        // Update head to be the new front of the list
        this.head = previous;
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Original linked list:");
list.print();

list.reverse();

console.log("Reversed linked list:");
list.print();
