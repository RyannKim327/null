class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
class LinkedList<T> {
    private head: Node<T> | null = null;

    // Add a new node to the end of the list
    append(value: T): void {
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

    // Remove a node by value
    remove(value: T): void {
        if (!this.head) return;

        // If the head needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current: Node<T> | null = this.head;
        while (current && current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Traverse the list
    traverse(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Print the list
    print(): void {
        console.log(this.traverse().join(' -> '));
    }
}
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.print(); // Output: 1 -> 2 -> 3

linkedList.remove(2);
linkedList.print(); // Output: 1 -> 3

linkedList.append(4);
linkedList.print(); // Output: 1 -> 3 -> 4
