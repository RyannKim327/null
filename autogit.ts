class Node<T> {
     T;
    next: Node<T> | null;

    constructor( T) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Add a node at the end of the list
    add( T): void {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Remove a node by value
    remove( T): void {
        if (this.head === null) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next; // Bypass the node
                return;
            }
            current = current.next;
        }
    }

    // Display the list
    display(): void {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(`${current.data} -> `);
            current = current.next;
        }
        console.log('null');
    }
}
const list = new LinkedList<number>();

// Adding nodes
list.add(1);
list.add(2);
list.add(3);

// Displaying the list
list.display(); // Output: 1 -> 2 -> 3 -> null

// Removing a node
list.remove(2);

// Displaying the list again
list.display(); // Output: 1 -> 3 -> null
