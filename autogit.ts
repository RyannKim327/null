class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end of the list
    append(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to find the middle element
    findMiddle(): ListNode | null {
        let slowPointer: ListNode | null = this.head;
        let fastPointer: ListNode | null = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer?.next || null; // Move slow pointer by 1
            fastPointer = fastPointer.next.next; // Move fast pointer by 2
        }

        return slowPointer; // Slow pointer will be at the middle
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const middleNode = list.findMiddle();
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: The middle element is: 3
}
