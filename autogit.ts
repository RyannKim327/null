// Node class to represent each element in the linked list
class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Add a new node at the end of the list
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

    // Add a new node at the start of the list
    prepend(data: T): void {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Print the linked list
    printList(): void {
        let current = this.head;
        let output = '';
        
        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null'; // signify end of the list
        console.log(output);
    }

    // Remove a node by value
    remove(data: T): boolean {
        if (!this.head) return false;

        // If the node to be removed is the head
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
        return false; // Node not found
    }

    // Find a node by value
    find(data: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null; // Not found
    }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.printList();  // Output: 0 -> 1 -> 2 -> null

linkedList.remove(1);
linkedList.printList();  // Output: 0 -> 2 -> null

const node = linkedList.find(2);
console.log(node);  // Output: Node { data: 2, next: null }
