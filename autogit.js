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

    findNthFromEnd(n) {
        let first = this.head;
        let second = this.head;

        // Move first pointer by n steps
        for (let i = 0; i < n; i++) {
            if (first === null) {
                return null; // List does not have n elements
            }
            first = first.next;
        }

        // Move both pointers simultaneously until first reaches the end
        while (first !== null) {
            first = first.next;
            second = second.next;
        }

        return second;
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);
linkedList.head.next.next.next = new Node(4);
linkedList.head.next.next.next.next = new Node(5);

const n = 2;
const nthNodeFromEnd = linkedList.findNthFromEnd(n);
console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.data}`);
