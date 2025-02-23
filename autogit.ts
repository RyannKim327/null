class Node<T> {
    value: T;
    next: Node<T> | null = null; // Pointer to the next node

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null; // Pointer to the first node
    tail: Node<T> | null = null; // Pointer to the last node
    length: number = 0; // Length of the linked list

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
    remove(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                if (!currentNode.next) {
                    this.tail = currentNode; // Update tail if needed
                }
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    // Print the linked list
    print(): void {
        let currentNode = this.head;
        let listStr = '';

        while (currentNode) {
            listStr += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        listStr += 'null';
        console.log(listStr);
    }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.print(); // Output: 1 -> 2 -> 3 -> null
linkedList.remove(2);
linkedList.print(); // Output: 1 -> 3 -> null
