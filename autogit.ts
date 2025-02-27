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
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Method to add a new node to the end of the list
    append(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        this.length++;
    }

    // Method to remove the last node from the list
    remove(): T | null {
        if (!this.head) return null;

        let current = this.head;
        let previous: Node<T> | null = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        if (previous) {
            previous.next = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return current.value;
    }

    // Method to display the list
    display(): void {
        let current = this.head;
        const elements: T[] = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);

console.log("Current Linked List:");
list.display(); // Output: 1 -> 2 -> 3

list.remove();
console.log("After removing the last element:");
list.display(); // Output: 1 -> 2
