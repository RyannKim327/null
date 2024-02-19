class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        let current;

        if (this.head === null) {
            this.head = newNode;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    remove(data) {
        let current = this.head;
        let prevNode = null;

        while (current !== null) {
            if (current.data === data) {
                if (prevNode === null) {
                    this.head = current.next;
                } else {
                    prevNode.next = current.next;
                }

                this.size--;
                return current.data;
            }

            prevNode = current;
            current = current.next;
        }

        return null;
    }

    print() {
        let current = this.head;
        let result = '';

        while (current !== null) {
            result += current.data + ' ';
            current = current.next;
        }

        console.log(result.trim());
    }
}

// Example Usage:
const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

linkedList.print(); // Output: 1 2 3

linkedList.remove(2);

linkedList.print(); // Output: 1 3
