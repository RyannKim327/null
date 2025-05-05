class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    // Adds a value to the end of the list
    add(value: T): void {
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

    // Removes the first instance of a value from the list
    remove(value: T): boolean {
        if (!this.head) return false;

        // Special case: removing the head
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        // Look for the value in the rest of the list
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                // Update tail if we removed the last element
                if (current.next === null) {
                    this.tail = current;
                }
                this.length--;
                return true;
            }
            current = current.next;
        }

        return false; // Value not found
    }

    // Gets the current length of the list
    size(): number {
        return this.length;
    }

    // Traverses the list and returns the values as an array
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Clears the list
    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.toArray()); // Output: [1, 2, 3]
list.remove(2);
console.log(list.toArray()); // Output: [1, 3]
console.log(list.size()); // Output: 2
