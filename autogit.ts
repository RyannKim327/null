class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    reverse() {
        let prev: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null;

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

console.log("Original linked list:");
console.log(linkedList);

linkedList.reverse();

console.log("Reversed linked list:");
console.log(linkedList);
