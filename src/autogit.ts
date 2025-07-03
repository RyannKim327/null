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

    // Method to add a new node to the list
    add(value: number): void {
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

    // Method to find the middle element
    findMiddle(): Node | null {
        if (!this.head) return null; // List is empty

        let slowPointer: Node | null = this.head;
        let fastPointer: Node | null = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer!.next; // Move slow pointer one step
            fastPointer = fastPointer.next.next; // Move fast pointer two steps
        }

        return slowPointer; // Slow pointer is at the middle
    }
}
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

const middleNode = list.findMiddle();

if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: The middle element is: 3
}

// Example of a list with an even number of nodes
const list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(3);
list2.add(4);

const middleNode2 = list2.findMiddle();

if (middleNode2) {
    console.log(`The middle element is: ${middleNode2.value}`); // Output: The middle element is: 3
}
