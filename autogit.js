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
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    findNthFromEnd(n) {
        let pointer1 = this.head;
        let pointer2 = this.head;
        for (let i = 0; i < n; i++) {
            if (pointer2 === null) {
                return null; // List is too short
            }
            pointer2 = pointer2.next;
        }
        while (pointer2.next) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }
        return pointer1.data;
    }
}

// Test
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

const n = 2; // Find the 2nd node from the end
const nthFromEnd = ll.findNthFromEnd(n);
console.log(`${n}th node from the end is: ${nthFromEnd}`);
