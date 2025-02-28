// Define the Node class
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// Define the LinkedList class
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Method to add a node at the end
    append(value: T): void {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to remove a node by value
    remove(value: T): boolean {
        if (this.head === null) {
            return false;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Method to display the list
    display(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

// Example usage
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10 -> 20 -> 30

list.remove(20);
list.display(); // Output: 10 -> 30
