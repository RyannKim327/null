class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);

console.log('Original Linked List:');
let currentNode = linkedList.head;
while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
}

console.log('Reversed Linked List:');
linkedList.reverse();

currentNode = linkedList.head;
while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
}
