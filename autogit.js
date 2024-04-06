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
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    findNthNodeFromEnd(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;

        // Move the first pointer to the nth node from the beginning
        for (let i = 0; i < n; i++) {
            if (firstPointer === null) {
                return null; // Return null if n is greater than the length of the linked list
            }
            firstPointer = firstPointer.next;
        }

        // Move both pointers simultaneously until the first pointer reaches the end
        while (firstPointer !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }

        return secondPointer;
    }
}
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
const n = 2; // Specify the value of n
const nthNodeFromEnd = linkedList.findNthNodeFromEnd(n);

if (nthNodeFromEnd) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
    console.log(`Could not find the ${n}th node from the end.`);
}
