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

    // Method to append a new node with a given value
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
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.value + (current.next ? " -> " : ""));
            current = current.next;
        }
        console.log();
    }
}
function reverseLinkedList(head: Node | null): Node | null {
    let prev: Node | null = null;
    let current = head;
    let next: Node | null = null;

    while (current) {
        next = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current;      // Move prev to current node
        current = next;      // Move to the next node
    }
    return prev; // New head of the reversed list
}
// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original Linked List:");
list.printList();

list.head = reverseLinkedList(list.head);

console.log("Reversed Linked List:");
list.printList();
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

    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.value + (current.next ? " -> " : ""));
            current = current.next;
        }
        console.log();
    }
}

function reverseLinkedList(head: Node | null): Node | null {
    let prev: Node | null = null;
    let current = head;
    let next: Node | null = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original Linked List:");
list.printList();

list.head = reverseLinkedList(list.head);

console.log("Reversed Linked List:");
list.printList();
