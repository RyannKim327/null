class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
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

        // Move pointer2 n nodes ahead
        for (let i = 0; i < n; i++) {
            if (pointer2 === null) {
                return null; // List is shorter than n nodes
            }
            pointer2 = pointer2.next;
        }

        // Move both pointers until pointer2 reaches the end
        while (pointer2 !== null) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }

        return pointer1; // pointer1 is now pointing to the nth node from the end
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

const n = 2;
const nthNode = linkedList.findNthFromEnd(n); // Find the 2nd node from the end
console.log(nthNode.value); // Output: 4
