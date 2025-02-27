class Node<T> {
     T;
    next: Node<T> | null;

    constructor( T) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList<T> {
    private head: Node<T> | null = null;

    // Add a new node to the end of the list
    append( T): void {
        const newNode = new Node(data);
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
    remove( T): void {
        if (!this.head) return;
        
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Display the list
    display(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10 -> 20 -> 30

list.remove(20);
list.display(); // Output: 10 -> 30
