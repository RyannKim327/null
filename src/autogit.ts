class Node {
    data: any;
    next: Node | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    // Method to append nodes to the linked list
    append(data: any) {
        const newNode = new Node(data);
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
        let previous: Node | null = null;
        let current = this.head;

        while (current) {
            const next = current.next; // Store the next node
            current.next = previous;    // Reverse the link
            previous = current;         // Move previous to this node
            current = next;             // Move to the next node
        }
        this.head = previous; // Update the head to the new front of the list
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        const elements: any[] = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log("Original Linked List:");
linkedList.print();

linkedList.reverse();

console.log("Reversed Linked List:");
linkedList.print();
