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

    // Add a new element to the end of the list
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

    // Remove an element by value
    remove(value: T): boolean {
        if (!this.head) {
            return false;
        }

        // If the head needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Search for an element by value
    search(value: T): boolean {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Print list values
    printList(): void {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}
const linkedList = new LinkedList<number>();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);

linkedList.printList(); // Output: 10 -> 20 -> 30

linkedList.remove(20);
linkedList.printList(); // Output: 10 -> 30

console.log(linkedList.search(30)); // Output: true
console.log(linkedList.search(20)); // Output: false
