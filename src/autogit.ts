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
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    append(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, link the current tail to the new node and update the tail
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Add a node to the beginning of the list
    prepend(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, link the new node to the current head and update the head
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    // Remove the first occurrence of a node with the given value
    remove(value: T): boolean {
        if (!this.head) return false; // List is empty

        let currentNode: Node<T> | null = this.head;

        // Check if the head itself needs to be removed
        if (currentNode.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null; // List becomes empty
            this.size--;
            return true;
        }

        // Traverse the list to find the node to remove
        while (currentNode.next && currentNode.next.value !== value) {
            currentNode = currentNode.next;
        }

        // If the node was found, remove it
        if (currentNode.next) {
            if (currentNode.next === this.tail) {
                this.tail = currentNode; // Update tail if removing the last node
            }
            currentNode.next = currentNode.next.next;
            this.size--;
            return true;
        }

        return false; // Node not found
    }

    // Find a node by its value
    find(value: T): Node<T> | null {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null; // Node not found
    }

    // Convert the list to an array
    toArray(): T[] {
        const result: T[] = [];
        let currentNode = this.head;

        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }

    // Print the list as a string
    print(): void {
        console.log(this.toArray().join(" -> "));
    }
}
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);

console.log("Initial List:");
list.print(); // Output: 10 -> 20 -> 30

list.prepend(5);
console.log("After Prepend:");
list.print(); // Output: 5 -> 10 -> 20 -> 30

list.remove(20);
console.log("After Removing 20:");
list.print(); // Output: 5 -> 10 -> 30

console.log("Find 10:", list.find(10)); // Output: Node { value: 10, next: Node { ... } }
console.log("Find 20:", list.find(20)); // Output: null
