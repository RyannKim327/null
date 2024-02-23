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
        let current = this.head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Length of linked list: ", linkedList.getLength()); // Output: 3
