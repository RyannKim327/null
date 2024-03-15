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

    findNthNodeFromEnd(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;

        // Move the first pointer by n steps
        for (let i = 0; i < n; i++) {
            if (firstPointer === null) {
                return null; // n is greater than the length of the list
            }
            firstPointer = firstPointer.next;
        }

        // Move both pointers until the first pointer reaches the end of the list
        while (firstPointer !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }

        return secondPointer;
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

// Find the 2nd node from the end
const n = 2;
const nthNodeFromEnd = linkedList.findNthNodeFromEnd(n);

console.log(`Value of the ${n}th node from the end: ${nthNodeFromEnd ? nthNodeFromEnd.value : null}`);
