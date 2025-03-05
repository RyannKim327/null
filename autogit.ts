class Node<T> {
     T;
    next: Node<T> | null;

    constructor( T) {
        this.data = data;
        this.next = null; // Initially, the next reference is null
    }
}

class LinkedList<T> {
    head: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new node at the end of the list
    append( T): void {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode; // If list is empty, set head to new node
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Link last node to new node
        }
        this.size++;
    }

    // Remove a node from the list
    remove( T): void {
        if (this.head === null) return; // If the list is empty

        if (this.head.data === data) {
            this.head = this.head.next; // If the head node is the one to be removed
            this.size--;
            return;
        }

        let current = this.head;
        let previous: Node<T> | null = null;

        while (current !== null && current.data !== data) {
            previous = current; // Keep track of the previous node
            current = current.next; // Move to the next node
        }

        if (current !== null) {
            previous!.next = current.next; // Bypass the current node
            this.size--;
        }
    }

    // Traverse the list to print it
    print(): void {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    // Get the size of the list
    getSize(): number {
        return this.size;
    }
}

// Example usage
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30 -> null

list.remove(20);
list.print(); // Output: 10 -> 30 -> null

console.log('Size of the list:', list.getSize()); // Output: Size of the list: 2
