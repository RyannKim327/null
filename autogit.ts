class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null;

    // Method to append a new value at the end of the list
    append(value: T) {
        const newNode = new Node(value);
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
list.append(1);
list.append(2);
list.append(3);

console.log("Length of the linked list:", list.length()); // Output: Length of the linked list: 3
