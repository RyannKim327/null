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

    // Add a new node at the end of the list
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

    // Remove a node by value
    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Find a node by value
    find(value: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Print the list
    print(): void {
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
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 -> 2 -> 3

list.remove(2);
list.print(); // Output: 1 -> 3

const foundNode = list.find(3);
console.log(foundNode ? foundNode.value : 'Not found'); // Output: 3
