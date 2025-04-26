class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end of the linked list
    append(data: T): void {
        const newNode = new Node(data);
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

    // Method to display the list
    printList(): void {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.data} -> `);
            current = current.next;
        }
        console.log('null');
    }

    // Method to remove a node by value
    remove(data: T): void {
        if (!this.head) {
            return;
        }

        // If the node to be deleted is the head
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        // Search for the node to be removed
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // Skip the node to be removed
                return;
            }
            current = current.next;
        }
    }

    // Method to find a node by value
    find(data: T): boolean {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);

list.printList(); // Output: 10 -> 20 -> 30 -> null

list.remove(20);
list.printList(); // Output: 10 -> 30 -> null

console.log(list.find(30)); // Output: true
console.log(list.find(20)); // Output: false
