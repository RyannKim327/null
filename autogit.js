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

    // Function to append a node at the end of the linked list
    append(data) {
        let newNode = new Node(data);
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

    // Function to find the nth node from the end of the linked list
    findNthFromEnd(n) {
        let first = this.head;
        let second = this.head;
        for (let i = 0; i < n; i++) {
            if (first === null) {
                return null; // n is greater than the length of the linked list
            }
            first = first.next;
        }
        while (first !== null) {
            first = first.next;
            second = second.next;
        }
        return second;
    }
}

// Example usage
let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

let n = 3;
let nthNode = linkedList.findNthFromEnd(n);

if (nthNode) {
    console.log(`The ${n}th node from the end is: ${nthNode.data}`);
} else {
    console.log(`The linked list is shorter than ${n} nodes.`);
}
