class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList<T> {
    private head: Node<T> | null; // Reference to the first node in the list
    private size: number;         // Number of nodes in the list

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new node at the end of the list
    add(data: T): void {
        const newNode = new Node(data);

        if (!this.head) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and append the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // Remove the first occurrence of a node with the specified data
    remove(data: T): boolean {
        if (!this.head) return false; // List is empty

        // If the head node contains the data, remove it
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        // Search for the node to remove
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        // If the node was found, remove it
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }

        return false; // Node not found
    }

    // Check if the list contains a specific value
    contains(data: T): boolean {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Get the size of the list
    getSize(): number {
        return this.size;
    }

    // Convert the list to an array for easy viewing
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    // Clear the entire list
    clear(): void {
        this.head = null;
        this.size = 0;
    }
}
const list = new LinkedList<number>();

// Add elements to the list
list.add(10);
list.add(20);
list.add(30);

// Print the list as an array
console.log(list.toArray()); // Output: [10, 20, 30]

// Check if the list contains a specific value
console.log(list.contains(20)); // Output: true
console.log(list.contains(40)); // Output: false

// Remove an element
list.remove(20);
console.log(list.toArray()); // Output: [10, 30]

// Get the size of the list
console.log(list.getSize()); // Output: 2

// Clear the list
list.clear();
console.log(list.toArray()); // Output: []
