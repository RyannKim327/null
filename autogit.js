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

    add(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    getLength() {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Creating a linked list
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

// Finding the length of the linked list
const length = list.getLength();
console.log('Length of the linked list:', length);
