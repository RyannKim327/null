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
    private size: number = 0;

    // Add a new node at the end of the list
    add(value: T): void {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        this.size++;
    }

    // Remove a node from the list by value
    remove(value: T): boolean {
        if (this.head === null) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Get the size of the linked list
    getSize(): number {
        return this.size;
    }

    // Print the linked list
    print(): void {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.value + (current.next ? ' -> ' : '');
            current = current.next;
        }
        console.log(result);
    }
}
const myList = new LinkedList<number>();
myList.add(10);
myList.add(20);
myList.add(30);
myList.print(); // Output: 10 -> 20 -> 30

console.log("Size of linked list:", myList.getSize()); // Output: Size of linked list: 3

myList.remove(20);
myList.print(); // Output: 10 -> 30
console.log("Size of linked list:", myList.getSize()); // Output: Size of linked list: 2
