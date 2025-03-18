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

    // Add a new node to the end of the list
    append(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove a node by value
    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (current.next === null) {
                    this.tail = current; // Update tail if needed
                }
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Print the list
    print(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }

    // Get the size of the list
    size(): number {
        return this.length;
    }

    // Check if the list is empty
    isEmpty(): boolean {
        return this.length === 0;
    }
}
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 -> 2 -> 3

list.remove(2);
list.print(); // Output: 1 -> 3

console.log(list.size()); // Output: 2
console.log(list.isEmpty()); // Output: false
