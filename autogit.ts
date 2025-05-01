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

    // Method to add a new node at the end of the list
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
    }

    // Method to find the length of the linked list
    length(): number {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);

console.log("Length of linked list:", list.length()); // Output: Length of linked list: 3
