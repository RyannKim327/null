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

    findMiddle() {
        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        return slowPointer.data;
    }
}

// Sample usage
let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = new Node(5);

console.log(list.findMiddle()); // Output: 3
