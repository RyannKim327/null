class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null;

    // Method to append a node at the end of the list
    append(data: T): void {
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

    // Method to display the list
    display(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }

    // Method to remove a node by value
    remove(data: T): boolean {
        if (!this.head) return false;

        // Handle the case for the head node
        if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Method to find a node by value
    find(data: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
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

const foundNode = list.find(30);
if (foundNode) {
    console.log(`Found node with data: ${foundNode.data}`); // Output: Found node with data: 30
}
