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

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    findNthNodeFromEnd(n) {
        let mainPointer = this.head;
        let refPointer = this.head;

        // Move refPointer by n steps
        for (let i = 0; i < n; i++) {
            if (refPointer === null) {
                return null; // List is shorter than n
            }
            refPointer = refPointer.next;
        }

        // Move both pointers until refPointer reaches the end
        while (refPointer !== null) {
            mainPointer = mainPointer.next;
            refPointer = refPointer.next;
        }

        return mainPointer;
    }
}

// Sample usage
let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

let n = 2; // Find the 2nd node from the end
let nthNodeFromEnd = ll.findNthNodeFromEnd(n);

if (nthNodeFromEnd !== null) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.data}`);
} else {
    console.log(`List is shorter than ${n}`);
}
