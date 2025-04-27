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
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to add a node at the end of the list
    add(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Method to remove a node by value
    remove(value: T): boolean {
        if (!this.head) {
            return false; // List is empty
        }

        if (this.head.value === value) {
            this.head = this.head.next; // Remove head
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next; // Remove the node
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false; // Value not found
    }

    // Method to find a node by value
    find(value: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current; // Node found
            }
            current = current.next;
        }
        return null; // Node not found
    }

    // Method to display the linked list
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
const linkedList = new LinkedList<number>();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display(); // Output: 1 -> 2 -> 3

linkedList.remove(2);
linkedList.display(); // Output: 1 -> 3

const foundNode = linkedList.find(3);
console.log(foundNode ? foundNode.value : 'Not found'); // Output: 3
