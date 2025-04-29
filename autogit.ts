class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList<T> {
    private head: Node<T> | null = null;

    // Adds a new node with the specified data to the end of the list
    add(data: T): void {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current: Node<T> | null = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Removes the first occurrence of a node with the specified data
    remove(data: T): boolean {
        if (this.head === null) return false;

        if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        }

        let current: Node<T> | null = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false; // data not found
    }

    // Displays the contents of the list
    display(): void {
        let current: Node<T> | null = this.head;
        const elements: T[] = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3

list.remove(2);
list.display(); // Output: 1 -> 3

list.remove(1);
list.display(); // Output: 3

list.remove(3);
list.display(); // Output: (empty)
