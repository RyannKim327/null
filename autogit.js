class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
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

    getLength() {
        let length = 0;
        let current = this.head;

        while (current) {
            length++;
            current = current.next;
        }

        return length;
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list.getLength()); // Output: 3
