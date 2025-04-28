class Node<T> {
    public value: T;
    public next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    // Add a new node to the end of the list
    public append(value: T): void {
        const newNode = new Node(value);
        if (this.head === null) {
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

    // Add a new node to the front of the list
    public prepend(value: T): void {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Remove a node with a specific value
    public remove(value: T): void {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            this.length--;
            return;
        }

        let current: Node<T> | null = this.head;
        while (current?.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (current.next === null) {
                    this.tail = current;
                }
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    // Display the linked list
    public display(): void {
        let current: Node<T> | null = this.head;
        let result: string[] = [];
        while (current) {
            result.push(current.value.toString());
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    // Get the length of the linked list
    public size(): number {
        return this.length;
    }
}

// Example usage
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.display(); // Output: 0 -> 1 -> 2
linkedList.remove(1);
linkedList.display(); // Output: 0 -> 2
console.log(`Size: ${linkedList.size()}`); // Output: Size: 2
