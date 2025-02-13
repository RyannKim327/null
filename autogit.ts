class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end of the linked list
    append(value: T) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        
        currentNode.next = newNode;
    }

    // Method to find the length of the linked list
    length(): number {
        let count = 0;
        let currentNode = this.head;
        
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        
        return count;
    }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Length of the linked list:", linkedList.length()); // Output: 3
