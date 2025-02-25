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

    // Function to add a node to the linked list (for testing purposes)
    add( T) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Function to find the length of the linked list
    length(): number {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log("Length of the linked list is:", list.length()); // Output: Length of the linked list is: 3
